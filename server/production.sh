sudo killall -9 node
rm -rf dist
tsc
pm2 start app
