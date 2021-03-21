FROM node:14.16.0-alpine

CMD apk update && apk upgrade && apk add bash

WORKDIR /usr/app/client
COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
