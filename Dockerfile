FROM node:16.14.0-alpine3.15
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
CMD yarn start
