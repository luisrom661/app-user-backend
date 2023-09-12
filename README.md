# RESTServer in Node with Express and PostgresSQL

[![NodeJS](https://img.icons8.com/?size=64&id=hsPbhkOH4FMe&format=png)](https://nodejs.org/en)[![Pnpm](https://iili.io/HQmenZF.png)](https://pnpm.io/es/)[![Postgres](https://img.icons8.com/?size=64&id=LwQEs9KnDgIo&format=png)](https://www.postgresql.org/)[![JWT](https://img.icons8.com/?size=64&id=rHpveptSuwDz&format=png)](https://jwt.io/)[![Prisma](https://img.icons8.com/?size=64&id=YKKmRFS8Utmm&format=png)](https://www.prisma.io/)[![Docker](https://img.icons8.com/?size=64&id=22813&format=png)](https://www.docker.com/)  [![]()]()

RESTServer básico en Node escrito en JavaScript y como gestor de paquetes pnpm.

## Tecnologías

Para este servidor he usado las siguientes técnologias y paquetes:

- [NodeJS] - Entorno de ejecución para JavaScript/TypeScript.
- [Express] - Framework de NodeJS para construcciones rápidas de un servidor web.
- [Postgres] - Sistema de base de datos relacionales SQL de código abierto.
- [Prisma] - ORM para optimizar las sentencias en PostgresSQL.
- [JWT] - Creación de tokens de acceso que permiten la propagación de identidad y privilegios.
- [Bcryptjs] - Paquete de una función hash para cifrar la contraseña.

Puedes descagar este [Repositorio público][tadhack-backend] para probarlo o lo que quieras, se encuentra en GitHub.

## Instalación

Este servidor web requiere [Node JS](https://nodejs.org/) v18+ o superior para correr.

Instalar [Pnpm](https://pnpm.io/es/) en caso de no tenerlo.

```sh
npm install -g pnpm
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

## Migraciones para Prisma
Ejecutar el comando para crear las primeras migraciones de la base de datos.
```
pnpx prisma migrate dev --name init
```
Luego, ejecutar el comando para generar el cliente de Prisma.
```
pnpx prisma generate
```
y por último, ejecutar el comando para aplicar los cambios en la base de datos.
```
prisma db push
```

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
   [postgres]: <https://www.postgresql.org/>
   [prisma]: <https://www.prisma.io/>
   [jwt]: <https://jwt.io/>
   [bcryptjs]: <https://www.npmjs.com/package/bcryptjs>
   [express-rate-limit]: <https://www.npmjs.com/package/express-rate-limit>