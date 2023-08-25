#!/bin/sh
echo "migrating"
yarn migrate:deploy
echo "seeding"
yarn seed
echo "go"
yarn start