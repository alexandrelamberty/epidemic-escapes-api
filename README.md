# Epidemic Escapes

## Usage

This API is part of a Docker stack. See [Epidemic-Escapes](), the main project to launch the complete stack.

## Development

To start the API without the launching the complete stack, a MySQL database is needed. To change the database see <https://sequelize.org/docs/v6/getting-started/> for the sequelize drivers available. After installation change the dialect in `src/models/index.js` and `config/config.js`.

Create an `.env.dev` file and add the following environment variables.

```properties
NODE_ENV="development"
API_PORT=3000
DB_SERVER=localhost
DB_DATABASE=bookstore
DB_USERNAME=bookstore
DB_PASSWORD=password
DB_PORT=3306
JWT_SECRET=d7a481461577ba4c3c4c6946cca7204b
JWT_EXPIRE=1d
JWT_ISSUER=epidemic-escapes
JWT_AUDIENCE=web-epimic-escapes
```

fill accordingly with the database configuration.

### Starting the API

Start the chosen database with Docker.

```shell
docker compose up mysql
```

See <https://sequelize.org/docs/v6/getting-started/> for the sequelize drivers available, and look at the `docker-compose.yml` for the available database services.

Start the application in watch mode with nodemon

```shell
npm run star:dev
```

### Docker

Build the image.

```shell
docker build . -t alexandrelamberty/bookstore-api:tag
```

Run the image

```shell
docker run -p 3000:3000 --network=bookstore_default --env-file .env --name bookstore-api -d alexandrelamberty/bookstore-api:tag
```

Push image to DockerHub

```shell
docker push alexandrelamberty/bookstore-api:tag
```

## Migrations

Run the migrations

```shell
npm run migrate:up
```

Roll back migrations

```shell
npm run migrate:undo
```

### Seeds

Running the seeds

```shell
npm run seed:all
```

Roll back seeding

```shell
npm run seed:undo
```

## Tests

## Production

## References

- <https://expressjs.com/>
- <https://nodejs.org/>
- <https://github.com/ranisalt/node-argon2>
- <https://sequelize.org/docs/v6/>
- <https://sequelize.org/docs/v6/other-topics/migrations/>
- <https://developers.google.com/books/docs/viewer/developers_guide>
