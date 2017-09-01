#!/bin/bash
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i /local/api-docs.yml \
    -l $1 \
    -o /local/sdk/$1