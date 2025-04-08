FROM node:18-alpine

WORKDDIR /app

copy package*.jason ./

RUN npm install

copy . .

expose 3001

CMD ["npm","start"]
