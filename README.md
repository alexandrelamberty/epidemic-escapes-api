# Epidemic Escapes

## Bugs

- Argon2 hash cannot be stored in MySQL

## Configuration

```properties
NODE_ENV="development"
PORT=3000
DB_SERVER=localhost
DB_DATABASE=bookstore
DB_USERNAME=root
DB_PASSWORD=password
DB_PORT=3306
JWT_SECRET=d7a481461577ba4c3c4c6946cca7204b
JWT_EXPIRE=1d
JWT_ISSUER=epidemic-escapes
JWT_AUDIENCE=web-epimic-escapes
```

## Development

Start the chosen database with Docker.

```shell
docker compose up mysql
```

See <https://sequelize.org/docs/v6/getting-started/> for the sequelize drivers available, and look at the `docker-compose.yml` for the available database services.

Start the application in watch mode with nodemon

```shell
npm run star:dev
```

## Migrations

## Tests

## Production

## References

- <https://expressjs.com/>
- <https://nodejs.org/>
- <https://github.com/ranisalt/node-argon2>
- <https://sequelize.org/docs/v6/>
- <https://sequelize.org/docs/v6/other-topics/migrations/>
- <https://developers.google.com/books/docs/viewer/developers_guide>
