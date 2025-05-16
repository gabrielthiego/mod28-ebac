FROM grafana/k6

WORKDIR /app

COPY load-tests /app/load-tests

ENTRYPOINT ["k6", "run"]
