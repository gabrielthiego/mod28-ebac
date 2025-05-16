# Módulo 28 - Testes de Performance

## Como rodar os testes

No terminal, estando na pasta do projeto (`mod28-ebac`), rode:

bash
docker build -t k6-teste .
docker run --rm k6-teste run /app/load-tests/clientes.js
