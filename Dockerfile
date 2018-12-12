FROM node:8.12-slim
COPY . /app
WORKDIR /app
RUN chmod +x run.sh
ENTRYPOINT ["./run.sh"]