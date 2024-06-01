# Etapa de build
FROM node:19.5.0-alpine as build
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
COPY . .
RUN npm install
RUN npm run build 

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
