FROM node:15.9.0

WORKDIR /app

copy . ./app

RUN npm install 

CMD [ "npm", "run", "start:dev" ]