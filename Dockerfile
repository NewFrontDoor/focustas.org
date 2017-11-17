FROM node:8.9-alpine

MAINTAINER v100it Team "it@vision100.org"

EXPOSE 3000

ENV DEBIAN_FRONTEND=noninteractive
ENV APP_DIR /var/www
ENV TZ Australia/Sydney

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Add needed files (.npmrc needed for npm login)
COPY package.json ./
RUN npm install

# Add app files
COPY . ./
