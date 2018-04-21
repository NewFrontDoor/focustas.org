# focustas.org [![Build Status][build-badge]][build-status] [![Coverage Status][coverage-badge]][coverage-status]

## Usage

### Environment variables

The `.env.example` is an example `.env` file that
should list all the necessary environment variables required
for development. If a new variable is needed, make sure to add it
to the example file.

```shell
cp .env.example .env
```

### Local development

`docker-compose` runs the application in development mode along with
a local mongodb instance. It watches for file changes during development

```shell
docker-compose build
docker-compose up
```

[build-badge]: https://img.shields.io/travis/Vision100IT/focustas.org.svg

[build-status]: https://travis-ci.org/Vision100IT/focustas.org

[coverage-badge]: https://img.shields.io/codecov/c/github/Vision100IT/focustas.org.svg

[coverage-status]: https://codecov.io/github/Vision100IT/focustas.org
