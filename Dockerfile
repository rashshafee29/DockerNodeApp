FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm i

COPY . /usr/src/app

EXPOSE 4000
CMD [ "npm", "start" ]