import sharp from 'sharp';
import glob from 'glob';
import fs from 'fs-extra';

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1800;
const QUALITY = 70;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return fs.rename(optimizedName, match);
  })
);
