# Этап 1: сборка приложения
FROM gradle:8.7-jdk21-alpine AS builder

WORKDIR /build
COPY . .
RUN gradle build --no-daemon

# Этап 2: создание финального образа
FROM eclipse-temurin:21-jdk-alpine

VOLUME /tmp
WORKDIR /app

# Копируем только собранный .jar из предыдущего этапа
COPY --from=builder /build/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
