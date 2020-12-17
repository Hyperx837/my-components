#!/usr/bin/sh

if [[ ! -d node_modules ]]; then
    yarn install
    
    yarn add -D eslint eslint-config-airbnb eslint-config-prettier \
    eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks \
    node-sass@4.14.1 prettier eslint-import-resolver-typescript \
    eslint-plugin-import
    
fi

yarn start
