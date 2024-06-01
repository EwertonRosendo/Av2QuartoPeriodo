# Etapa de build
FROM node:latest as build
WORKDIR /app

COPY package*.json ./
ADD package*.json ./

RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
