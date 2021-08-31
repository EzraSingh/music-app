FROM node:10.23-alpine3.10 AS Installer

WORKDIR /app

COPY package*.json ./

ARG NPM_TOKEN

RUN npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

RUN npm install

FROM Installer AS Runtime

ARG API=development

ENV API_ENV=${API}

ARG GIT_COMMIT

ENV GIT_COMMIT=${GIT_COMMIT}

COPY . .

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "localhost:5000/login", "-q", "-O" ]

ENTRYPOINT [ "npm", "run" ]

CMD [ "develop", "--", "--inspect" ]