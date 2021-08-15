rm -rf dist
tsc
forever start dist/app.js
