FROM node:12 AS base

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]
