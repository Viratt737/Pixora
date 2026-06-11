# Stage 1 - Build
FROM node:v23.11.0-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY package-lock*.json ./
RUN npm install
COPY . .

RUN npm run build

# stage 2
FROM nginx:v1.29.8-alpine-slim

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf               

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]