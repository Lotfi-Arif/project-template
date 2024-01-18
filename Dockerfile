# 🏗️ Stage 1: Build
FROM node:20.11.0-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
ARG BUILD_TARGET
RUN yarn build ${BUILD_TARGET}

# 🚀 Stage 2: Run
FROM node:20.11.0-alpine
WORKDIR /usr/src/app
ARG BUILD_TARGET
COPY --from=builder /usr/src/app/dist/apps/${BUILD_TARGET} ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main"]
