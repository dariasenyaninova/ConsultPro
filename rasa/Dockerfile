FROM rasa/rasa:3.6.10

# Работаем от root, чтобы создать папки и выставить права
USER root

# Копируем проект в /app
COPY . /app

# Создаем папку .config и даем права пользователю с uid 999
RUN mkdir -p /app/.config && chown -R 999:999 /app/.config /app

# Меняем пользователя на rasa (uid 999)
USER 999

# Обучаем модель (будет выполнено на этапе сборки образа)
RUN rasa train --data /app/data --config /app/config.yml --domain /app/domain.yml --out /app/models

WORKDIR /app

# По умолчанию запускаем rasa run с обученной моделью
CMD ["run", "--model", "/app/models"]
