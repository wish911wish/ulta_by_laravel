# docker-laravel

Build Laravel's development environment using docker.
PHP7.3/MySQL8.0/nginx/redis/node

## Build

- [Build for Mac](https://github.com/ucan-lab/docker-laravel/wiki/Build-for-Mac)
- [Build for Windows](https://github.com/ucan-lab/docker-laravel/wiki/Build-for-Windows)

## How to make API Definition document

do below command
```
src/vendor/bin/openapi -o docs/openapi.json --format json --debug src/app/Http/Controllers/Api/
```

definition
http://editor.swagger.io/


reference
https://www.utakata.work/entry/20180419/1524126970