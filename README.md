# Music App

> _Music App_

[View Staging](#)

[View Production](#)

## Development Requirements

* **NodeJS** ~= *14.17.0*
* **NPM** ~= *7.17.0*
* **Docker** ~= *20.10.8*
* **GNU Make** ~= *4.2.1*

# Getting Started

You may need this if you are missing `make` on Linux

```bash

sudo apt-get update
sudo apt-get install build-essential

```

Bootstrapping your development environment

```bash

npm install

```

```bash

# Install dependencies
make install

# Build app
make bundle

# Start local development enviornment
npm start

```

## References

```bash
# Invoke targets via

make <target>

```

| Target            | Description |
| -----------       | ----------- |
| `install`         | Install app dependencies
| `docker`          | Build Docker image
| `docker-run`      | Start Docker environment
| `docker-restart`  | Restart all Docker containers
| `docker-stop`     | Stop all Docker containers
| `bundle`          | Compile source code for static hosting
| `clean`           | Clean up generated files
| `clean-docker`    | Clean up Docker generated containers & volumes
| `lint`            | Format code syntax
| `refresh`         | Force Gatsby dev server to refresh
