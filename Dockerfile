FROM node:16.14.0-alpine3.15 AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.21.6-alpine as production
ENV NODE_ENV production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
