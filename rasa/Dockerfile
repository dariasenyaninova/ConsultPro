FROM rasa/rasa-sdk:3.6.2

WORKDIR /app

USER root

RUN python3 -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY actions/requirements.txt ./
COPY ./actions /app/actions
COPY ./models /app/models

CMD ["start","--actions","actions"]
USER 1001