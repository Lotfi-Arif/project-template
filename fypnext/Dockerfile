FROM node:16 AS base

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 3005
CMD ["npm", "run", "dev"]
