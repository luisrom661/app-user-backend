# RESTServer in Node with Express and MongoDB

[![NodeJS](https://img.icons8.com/?size=64&id=hsPbhkOH4FMe&format=png)](https://nodejs.org/en)[![Pnpm](https://iili.io/HQmenZF.png)](https://pnpm.io/es/)[![MongoDB](https://img.icons8.com/?size=64&id=74402&format=png)](https://www.mongodb.com/es)[![JWT](https://img.icons8.com/?size=64&id=rHpveptSuwDz&format=png)](https://jwt.io/)[![Mongoose](https://img.icons8.com/?size=64&id=gKfcEStXI1Hm&format=png)](https://mongoosejs.com/)[![Docker](https://img.icons8.com/?size=64&id=22813&format=png)](https://www.docker.com/)  [![]()]()

RESTServer básico en Node escrito en JavaScript y como gestor de paquetes pnpm.

## Tecnologías

Para este servidor he usado las siguientes técnologias y paquetes:

- [NodeJS] - Entorno de ejecución para JavaScript/TypeScript.
- [Express] - Framework de NodeJS para construcciones rápidas de un servidor web.
- [MongoDB] - Sistema de base de datos no relacionales NoSQL de código abierto.
- [Mongoose] - ODM para optimizar las sentencias en MongoDB.
- [JWT] - Creación de tokens de acceso que permiten la propagación de identidad y privilegios.
- [Bcryptjs] - Paquete de una función hash para cifrar la contraseña.

Puedes descagar este [Repositorio público][tadhack-backend] para probarlo o lo que quieras, se encuentra en GitHub.

## Instalación

Este servidor web requiere [Node JS](https://nodejs.org/) v18+ o superior para correr.

Instalar [Pnpm](https://pnpm.io/es/) en caso de no tenerlo.

```sh
npm install -g pnpm
pnpm i -g pnpm
```

Instala las dependencias y devDependencies e inicia el servidor.

```
cd backend
pnpm install
pnpm start:dev
```

## Docker

Ejecutar el comando para crear el contenedor de la base de datos en Docker.
```
docker-compose up -d
```

## Migraciones para TypeORM

## License

Atribución-NoComercial-CompartirIgual (CC BY-NC-SA)

Esta obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional.

Para ver una copia de esta licencia, visita https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es.



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [tadhack-backend]: <https://github.com/luisrom661/tadhack-backend>
   [git-repo-url]: <https://github.com/luisrom661/tadhack-backend.git>
   [nodejs]: <http://nodejs.org>
   [pnpm]: <https://pnpm.io/es/>
   [express]: <http://expressjs.com>
   [typescript]: <https://www.typescriptlang.org/>
   [mongodb]: <https://www.mongodb.com/es>
   [mongoose]: <https://mongoosejs.com/>
   [jwt]: <https://jwt.io/>
   [bcryptjs]: <https://www.npmjs.com/package/bcryptjs>
   [express-rate-limit]: <https://www.npmjs.com/package/express-rate-limit>