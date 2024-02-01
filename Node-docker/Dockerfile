FROM node

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install
COPY ./ ./
CMD ["npm","run","dev"]