#!/usr/bin/sh

if [[ ! -d node_modules ]]; then
    yarn install

    yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import \
    eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks \
    node-sass@4.14.1 prettier prop-types
fi

yarn start
