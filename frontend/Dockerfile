# Etapa de build
FROM node:latest as node
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
COPY . .
RUN npm install
RUN npm run build 

# Etapa de produção
FROM nginx:alpine
#COPY --from=build /app/dist/frontend /usr/share/nginx/html
