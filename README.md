# PT1FullStack
## Requirements:
## NodeJs installed (https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
## NestJs installed ($ npm install -g @nestjs/cli)
## vue3 installed ($ npm install vue@next)
## postgreSQL installed and running
## redis service runnig


## Redis setup (Ubuntu or Windows via WSL)

```
nsudo apt update
sudo apt install redis-server
```

### Redis start
```
redis-server
```

### PostgreSQL setup
```
sudo apt install postgresql postgresql-contrib
```

### PostgreSQL start
```
sudo service postgresql start
```


## Project setup

## BACKEND
```
cd backend
npm install
```

### Start NestJs server
```
npm run start:dev
```



## FRONTEND
```
cd frontend
npm install
```

##Start Vue3 server
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

##Running the Project
Ensure Redis and PostgreSQL are running.
Start the backend server.
Start the frontend server.
Access the frontend at http://localhost:8080.


