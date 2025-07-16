FROM gradle:8.7-jdk21-alpine AS builder

WORKDIR /build
COPY . .
RUN gradle build --no-daemon

FROM eclipse-temurin:21-jdk-alpine

VOLUME /tmp
WORKDIR /app

COPY --from=builder /build/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
