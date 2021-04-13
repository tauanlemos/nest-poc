FROM node

WORKDIR /app

COPY . ./

RUN npm i -g @nestjs/cli

RUN yarn 
RUN npm run build

CMD [ "npm", "run", "start:dev" ]