FROM node:15.9.0

WORKDIR /app

COPY . ./app

RUN npm install 

CMD [ "npm", "run", "start:debug" ]