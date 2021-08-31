const webpack = require('webpack');
const git = require('git-last-commit');
const __package = require('./package.json');

function gitLatestRef(){
  return new Promise((res, rej) => {
    git.getLastCommit((err, commit) => {
      if(err || !commit) {
        if(process.env.GIT_COMMIT){
          res(process.env.GIT_COMMIT.substr(0, 10));
        } else {
          res('none')
          console.log(err.stack);
          console.error('Can not read git commit details, not provided by Jenkins or .git/');
        }
      } else {
        const { shortHash } = commit;
        res(shortHash);
      }
    });
  });
}

exports.onCreateWebpackConfig = async ({ loaders, stage, actions, plugins }) => {
  const latestCommit = await gitLatestRef();
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __GIT_HEAD_REF__: JSON.stringify(latestCommit),
        __VERSION__: JSON.stringify(__package.version),
        __API_ENV__: JSON.stringify(process.env.API_ENV),
      })
    ]
  })
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
          document: 'min-document',
          self: 'node-noop',
          'self.navigator.userAgent': 'empty-string',
          window: 'node-noop',
        }),
      ],
      externals: {
        $: 'jQuery',
      }
    });
  }
};
