FROM node:alpine

RUN mkdir -p /usr/src/node-app

WORKDIR /usr/src/node-app

COPY . .

RUN yarn install --pure-lockfile

EXPOSE 3000

# CMD [ "node", "index.js" ]