# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /etc/nginx/html
EXPOSE 80