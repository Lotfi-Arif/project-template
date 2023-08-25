FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies

RUN yarn install

COPY . .


RUN yarn run build

EXPOSE 3001

CMD sh ./deploy.sh