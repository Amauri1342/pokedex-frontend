FROM node:21-alpine3.18

LABEL maintainer="OscarMarin"

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev
