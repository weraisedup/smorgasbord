FROM node:14.16.0-alpine

RUN apk update && apk upgrade && apk add bash vim

WORKDIR /usr/app

COPY package*.json ./
COPY public/ ./public
COPY . .

RUN npm ci -qy

CMD ["npm", "start"]
