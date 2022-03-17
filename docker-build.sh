#!/bin/sh

SHA=$(git rev-parse HEAD)

docker build . -t dannyfranca/anthorflix-front:latest -t dannyfranca/anthorflix-front:$SHA

docker push dannyfranca/anthorflix-front:$SHA
docker push dannyfranca/anthorflix-front:latest
