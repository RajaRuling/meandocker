# Commands

<!--
## Git

[Link](https://github.com/lydemann/docker-meanstack-demo/tree/master/client)

-->

## Angular

``` zsh
docker build -t meanstackapp:1.0 client && docker run -d -p 4200:4200 meanstackapp:1.0
```

## NodeJS

``` zsh
docker build -t meanserver:1.0 server && docker run -d -p 8080:8080 meanserver:1.0
```

## Mongo

``` zsh
docker run -p 27017:27017 mongo
```

## Docker

```zsh
docker-compose up

Removal
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
sleep 2
docker volume rm $(docker volume ls)
```
