sudo killall -9 node
rm -rf dist
tsc
forever start dist/app.js
