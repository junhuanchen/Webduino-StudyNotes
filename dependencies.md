```shell


# using node@8.9.4 in windows install (It is very difficult)

npm install webduino-js
npm install bufferutil

# bufferutil nofound need into 
# >> bufferutil 
# >> prebuilds 
# >> select your sys(win32-x64)
# >> get node-napi.node 
# >> move bufferutil\build\release (It doesn't exist. It needs to be built)
# bufferutil installed.

npm install utf-8-validate
# utf-8-validate is again as bufferutil

# because my computer all VS build tools install, 2015 passed.

npm config set msvs_version 2015

npm install webduino-serial-transport

```
