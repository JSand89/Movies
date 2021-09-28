# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

# Development server local
## new terminal
CD server 
npm run build
## new terminal
CD server
npm run dev

## conect whit local DataBase
In folder server 
keys.ts check info

    database:{
        host:'localhost',
        user:'root',
        password:'password',
        database:'mydbmovies',// your database
        insecureAuth : true,
        port:3306
    }

Check de information whit your DBSM predilect 

probali you need run this query in your DBSM

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges

this is because direct not count whit the autentification system required for mysql 8.0

## Team Work
Javier Sanchez
Fernanda Sanchez



