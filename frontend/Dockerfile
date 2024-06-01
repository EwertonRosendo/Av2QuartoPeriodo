# Etapa de build
FROM node:19.5.0-alpine as build
WORKDIR /app

COPY package*.json ./
ADD package*.json ./

RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
