# Proyecto Base de NestJS

> Descipci贸n del proyecto que sirve de base para proyectos de NestJS.

Proyecto que sirve de base para proyectos de NestJS.

## Tabla de contenidos

- [Proyecto Base de NestJS](#proyecto-base-de-nestjs)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Comenzando 馃敯](#comenzando-)
  - [Prerrequisitos 馃搵](#prerrequisitos-)
  - [Ejecuci贸n 馃殌](#ejecuci贸n-)
    - [Ejecutar proyecto local](#ejecutar-proyecto-local)
  - [Pruebas 馃泜](#pruebas-)
  - [Pruebas de API (Lippia)](#pruebas-de-api-lippia)
  - [Unitarias / E2E  / Coverage 馃悰](#unitarias--e2e---coverage-)
  - [Cobertura 馃摱](#cobertura-)
  - [Instalaci贸n 馃帀](#instalaci贸n-)
  - [Documentaci贸n 馃摉](#documentaci贸n-)
  - [Confluence 馃敆](#confluence-)
  - [Estructura 馃搨](#estructura-)
  - [Conceptos 馃摎](#conceptos-)
  - [Variables 馃摑](#variables-)
  - [Swagger 馃幃](#swagger-)
  - [API 馃彮](#api-)
  - [Versionamiento 馃帍](#versionamiento-)
  - [Equipo 馃懛](#equipo-)
  - [Licencia 馃搫](#licencia-)

## Comenzando 馃敯

A continuaci贸n se listar谩n todos los puntos necesarios para comenzar a desarrollar con el proyecto actual desde su fase de instalaci贸n hasta levantar un ambiente local de desarrollo sin problemas, se incluir谩n instrucciones de ejecuci贸n de comandos, testing, contexto de como esta estructurado el proyecto, los servicios REST expuestos e interacciones con otros or铆genes de datos.

## Prerrequisitos 馃搵

Para poder compilar y ejecutar la aplicaci贸n necesitas lo siguiente:

```bash
- [NodeJS](https://nodejs.org/es/)
- [NPM](https://www.npmjs.com/)
```

## Ejecuci贸n 馃殌

### Ejecutar proyecto local

Para ejecutar una aplicaci贸n en NestJS se realiza con el siguiente comando:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# watch mode (mac o linux)
$ npm run start:dev:mac

# production mode
$ npm run start:prod
```

## Pruebas 馃泜

Las pruebas son necesarias para la construcci贸n de nuevas funcionalidades dentro del proyecto, estas pruebas est谩n ligadas a un ciclo de vida de CI/CD que se ejecutar谩 al subir un nuevo cambio en las ramas, se aconseja ejecutar pruebas unitarias o de integraci贸n antes de subir una nueva funcionalidad al repositorio, esto es importante para evitar posibles errores en el futuro.

## Pruebas de API (Lippia)

En esta secci贸n se muestra un enlace de las pruebas de API  realizadas en el pipeline. Se tiene un reporte para efectos de visualizacion con algunas vistas complementarias que muestran como se ejecuto cada test.

> [Reporte Test Lippia API](https://consorcio-digital.gitlab.io/dev/corp/microservicios/bff-cotizador-seguro-auto/dashboard.html)

## Unitarias / E2E  / Coverage 馃悰

Ejecutar el siguiente comando para inicializar

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Cobertura 馃摱

La cobertura de c贸digo es una medida (porcentual) en las pruebas de software que mide el grado en que el c贸digo fuente de un programa ha sido comprobado.

Sirve para determinar la calidad del test que se lleve a cabo鈥? y para determinar las partes cr铆ticas del c贸digo que no han sido comprobadas y las partes que ya lo fueron,鈥? adem谩s se puede utilizar como t茅cnica de optimizaci贸n dentro de un compilador optimizador para llevar a cabo una eliminaci贸n de c贸digo muerto, m谩s espec铆ficamente sirve para detectar c贸digo inalcanzable.

## Instalaci贸n 馃帀

Ejecutar el siguiente comando para instalar dependencias:

```bash
$ npm install
```

## Documentaci贸n 馃摉

A continuaci贸n se explicar谩n puntos importantes relacionados a la estructura del proyecto, convenci贸n de nombres y conceptos de arquitectura. Por otro lado se detallar谩n los servicios REST que expone este microservicio y las interacciones o dependencias con entidades externas u or铆genes de datos.

## Confluence 馃敆

```
URL a confluence
```

## Estructura 馃搨

```bash
|-- src
    |-- main.ts
    |-- app.module.ts
      |-- [+] filters
          |-- global-exception.filter.ts
      |-- [+] guards
          |-- rut-token-guard.ts
      |-- [+] interceptors
          |-- request-log.interceptors.ts
      |-- [+] modules
          |-- [+] api-auto
              |-- [+] controllers/auto
                  |-- auto.controller.spec.ts
                  |-- auto.controller.ts
              |-- [+] dtos
                  |-- information-auto-response.dto.ts
                  |-- patente.dto.ts
              |-- [+] services/auto
                  |-- auto.service.spec.ts
                  |-- auto.service.ts
              |-- api-auto.module.ts
          |-- [+] health-check
              |-- [+] controllers/health
                  |-- health.controller.spec.ts
                  |-- health.controller.ts
              |-- [+] dtos
                  |-- health.dto.ts
              |-- health-check.module.ts
|-- test
    |-- [+] app.e2e-spec
    |-- [+] jest-e2e.json
*.env
* package-lock.json
* package.json

```

## Conceptos 馃摎

* **Modules**
    + Organiza la estructura y dependencias del proyecto. [M谩s Informaci贸n](https://docs.nestjs.com/modules) 
    +  Generar un m贸dulo mediante consola:
            ````
            nest g module [ResourceName]
            ````

* **Controllers**
    + Clases dise帽adas para especificar las rutas de servicios REST, obtener los request HTTP para extraer y manipular el mensaje e invocar a los servicio de negocio que encargados de procesar la solicitud. [M谩s Informaci贸n](https://docs.nestjs.com/controllers)
  + Generar un controlador mediante consola:
        ````
        nest g controller [ResourceName]
        ````

* **Services**
    + Clases que contienen la l贸gica del negocio, reciben desde los controladores los par谩metros necesarios para operar y para resolver la petici贸n pueden invocar a uno o varios providers. [M谩s Informaci贸n](https://docs.nestjs.com/providers)
    + Generar un service mediante consola:
          ````
          nest g service [ResourceName]
          ````

* **Interceptors**
    + Capa intemedia entre el cliente y el route handler.Sus funciones son agregar l贸gica extra antes y despues del llamado de un m茅todo, transformar el resultado de una funci贸n, monitorear tiempo de cada request,etc. [M谩s Informaci贸n](https://docs.nestjs.com/interceptors)

* **Filters**
    + Capa que captura todos los errores no manejados a nivel de aplicaci贸n. Su funci贸n es manejar errores de forma amigable al usuario o capa de cliente. [M谩s Informaci贸n](https://docs.nestjs.com/exception-filters)

* **Guards**
    + Tiene una 煤nica responsabilidad, verificar si el usuario y/o recurso solicitante pueden acceder al route handler. Su funci贸n es manejar la autorizaci贸n en base a los roles, permisos, etc del usuario. [M谩s Informaci贸n](https://docs.nestjs.com/guards)


## Variables 馃摑

A continuaci贸n se describen las variables de entorno del proyecto.

| Nombre                            | Descripci贸n                                                               |
| :-------------------------------- | :------------------------------------------------------------------------ |
| `APP_PORT`                        | Puerto el cual correo el servicio                                         |
| `ACTIVAR_SWAGGER`                 | Activa o desactiva el despliegue de swagger (documentacion)               |
| `USERID_TOKEN_KEY`                | Atributo del token que tiene la informacion del usuario (rut)             |
| `DESACTIVAR_VALIDACION_RUT_TOKEN` | Activa/Desactiva validacion de token en el guard (de cada servicio)       |
| `CHECK_ENVIRONMENT`               | Permite validar en que configuracion de ambiente corre el servicio        |
| `SENTRY_DSN`                      | URL de sentry para registro de los logs                                   |
| `SENTRY_DEBUG`                    | Debug mode                                                                |
| `SENTRY_ENVIRONMENT`              | Ambiente en el cual se registrar谩n los logs                               |
| `SENTRY_TRACES_SAMPLE_RATE`       | tasa de errores registrados en sentry / se usa valor 1 que es todo.       |
| `GENERIC_HTTP_ERROR`              | Detalle de mensaje de error generico.                                      |


## Swagger 馃幃

A continuaci贸n se listan los endpoints para acceder a la documentaci贸n Swagger del proyecto en los ambientes locales y pre productivos:

* **Microservicios API informaci贸n geogr谩fica**
    * HOST LOCAL:
    ````
    http://localhost:8080/swagger
    ````
    * HOST DEV:
    ````
    https://bff-cotizador-seguro-auto.corp.integracion.digital.consorcio.cl/swagger/
    ````
    * HOST QA:
    ````
    https://bff-cotizador-seguro-auto.corp.cert.digital.consorcio.cl/swagger/
    ````

## API 馃彮

A continuaci贸n se listan los endpoints que expone este proyecto:

* **Microservicios API informaci贸n geogr谩fica**
    * HOST DEV:
    ````
    https://bff-cotizador-seguro-auto.corp.integracion.digital.consorcio.cl
    ````
    * HOST QA:
    ````
    https://bff-cotizador-seguro-auto.corp.cert.digital.consorcio.cl
    ````
    * HOST Producci贸n:
    ````
    https://bff-cotizador-seguro-auto.corp.prod.digital.consorcio.cl
    ````

## Versionamiento 馃帍

Estas son las ramas donde mantienen las diferentes versiones del c贸digo fuente para cada uno de los ambientes:

* Desarrollo:
````
integracion
````
* QA:
````
develop
````
* Producci贸n:
````
master
````

## Equipo 馃懛

_(Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios)_

* **[Guillermo Brice帽o](guillermo.briceno@consorcio.cl)**

* **[Oscar Le贸n](oleon@bancoconsorcio.cl)** 


## Licencia 馃搫
```
Copyright (C) Consorcio Digital - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
```

Nest is [MIT licensed](LICENSE).
