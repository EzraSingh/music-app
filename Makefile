#
# The primary targets in this file are:
#
# install			Install app dependencies
# docker			Build Docker image
# docker-run		Start Docker environment
# docker-restart	Restart all Docker containers
# docker-stop		Stop all Docker containers
# bundle       		Compile source code for static hosting
# clean         	Clean up generated files
# clean-docker		Clean up Docker generated containers & volumes
# lint				Format code syntax
# refresh			Force Gatsby dev server to refresh
#

AWS_REGION := us-east-1

REGISTRY := xxxxxxxxx.dkr.ecr.us-east-1.amazonaws.com

IMAGE := music-app

GIT_COMMIT := $(shell git rev-parse HEAD)

VERSION_TAG := $(shell git rev-parse --short=8 HEAD)

LIBS := scripts

NODE_DEPS := package.json package-lock.json

COMPOSE_DEPS := docker-compose.yml

DOCKER_DEPS := Dockerfile .env

SRC_DEPS := ./src

BUILD_ARTIFACTS := node_modules/ public/ .cache/ .docker/

BUILD_TARGETS := development production

APP_HOST ?= http://localhost:5000

include .env

APP_HOST :=

.PHONY: all clean clean-docker $(BUILD_TARGETS)

all: install docker bundle lint publish docker-run docker-stop

clean: $(BUILD_ARTIFACTS) | clean-docker
	for artifact in $|; do \
		rm -rf $$artifact; \
	done

clean-docker:
	docker-compose down -v --remove-orphans

docker: $(DOCKER_DEPS) | docker-stop
	docker-compose build \
		--build-arg GIT_COMMIT=$(GIT_COMMIT)

docker-restart:
	docker-compose restart
	docker-compose ps

docker-run: $(DOCKER_DEPS) $(COMPOSE_DEPS)
	docker-compose up -d
	docker-compose ps

docker-stop:
	docker-compose down
	docker-compose ps

bundle: $(BUILD_ARTIFACTS) | docker-run
	for env in dev prod; do \
		docker-compose exec $$env npm run build; \
	done

install: $(NODE_DEPS)
	if ! test -d node_modules; then npm install; fi
	cp -u template.env .env

lint:
	npm run format

refresh:
	curl -X POST $(APP_HOST)/__refresh
