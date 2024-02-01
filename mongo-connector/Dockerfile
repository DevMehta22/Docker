FROM node

WORKDIR /var/app

COPY ./package.json ./

RUN npm install

COPY  . .

CMD [ "npm", "start" ]