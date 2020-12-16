#!/usr/bin/sh

if [[ ! -d node_modules ]]; then
    yarn install
    
    yarn add -D eslint eslint-config-airbnb eslint-config-prettier \
    eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks \
    node-sass@4.14.1 prettier typescript @types/node @types/react \
    @types/react-dom @types/jest eslint-plugin-import eslint-import-resolver-typescript \

    
    yarn add prop-types
fi


yarn start
