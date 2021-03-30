FROM node:14.16.0-alpine

RUN apk update && apk upgrade && apk add bash vim && npm install -g serve react-scripts

WORKDIR /usr/app
COPY package*.json ./
COPY public/ ./public
COPY . .

RUN npm ci -qy
RUN npm run build

CMD ["serve", "-s", "build"]
