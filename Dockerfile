FROM node:20.13-alpine

WORKDIR /app-back

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start"]
