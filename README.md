# POC de nest js

## Stack

- Typescript
- NestJS
- Docker
- Mongodb

## Dependencias

- Docker
- Docker-compose

## Setup

- Para rodar a aplicação localmente, basta subir os containers com `docker-compose up -d`

## Branches

O estudo está distribuido em 3 branches. Na branch main temos um CRUD simples. Uma primeira refatoração utilizando o modulo de `cqrs` do próprio NestJs se encontra na branch `cqrs-refactor`. Uma tentativa de refatoração seguindo princípios de clean architecture pode ser vista na branch `clean-refactor`