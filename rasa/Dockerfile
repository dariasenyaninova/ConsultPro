FROM rasa/rasa:3.6.10

USER root

COPY . /app

RUN mkdir -p /app/.config && chown -R 0:0 /app/.config /app

USER 999

RUN rasa train --data /app/data --config /app/config.yml --domain /app/domain.yml --out /app/models

WORKDIR /app

CMD ["run", "--model", "/app/models", "--enable-api", "--cors", "*", "--debug"]