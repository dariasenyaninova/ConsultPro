# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Production stage
FROM httpd:alpine
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
EXPOSE 80