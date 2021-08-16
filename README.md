# Proyecto Base de NestJS

> Descipción del proyecto que sirve de base para proyectos de NestJS.

Proyecto que sirve de base para proyectos de NestJS.

## Tabla de contenidos

- [Proyecto Base de NestJS](#proyecto-base-de-nestjs)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Comenzando 🔰](#comenzando-)
  - [Prerrequisitos 📋](#prerrequisitos-)
  - [Ejecución 🚀](#ejecución-)
    - [Ejecutar proyecto local](#ejecutar-proyecto-local)
  - [Pruebas 🛂](#pruebas-)
  - [Pruebas de API (Lippia)](#pruebas-de-api-lippia)
  - [Unitarias / E2E  / Coverage 🐛](#unitarias--e2e---coverage-)
  - [Cobertura 📶](#cobertura-)
  - [Instalación 🎉](#instalación-)
  - [Documentación 📖](#documentación-)
  - [Confluence 🔗](#confluence-)
  - [Estructura 📂](#estructura-)
  - [Conceptos 📚](#conceptos-)
  - [Variables 📝](#variables-)
  - [Swagger 🎮](#swagger-)
  - [API 🏭](#api-)
  - [Versionamiento 🎏](#versionamiento-)
  - [Equipo 👷](#equipo-)
  - [Licencia 📄](#licencia-)

## Comenzando 🔰

A continuación se listarán todos los puntos necesarios para comenzar a desarrollar con el proyecto actual desde su fase de instalación hasta levantar un ambiente local de desarrollo sin problemas, se incluirán instrucciones de ejecución de comandos, testing, contexto de como esta estructurado el proyecto, los servicios REST expuestos e interacciones con otros orígenes de datos.

## Prerrequisitos 📋

Para poder compilar y ejecutar la aplicación necesitas lo siguiente:

```bash
- [NodeJS](https://nodejs.org/es/)
- [NPM](https://www.npmjs.com/)
```

## Ejecución 🚀

### Ejecutar proyecto local

Para ejecutar una aplicación en NestJS se realiza con el siguiente comando:

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

## Pruebas 🛂

Las pruebas son necesarias para la construcción de nuevas funcionalidades dentro del proyecto, estas pruebas están ligadas a un ciclo de vida de CI/CD que se ejecutará al subir un nuevo cambio en las ramas, se aconseja ejecutar pruebas unitarias o de integración antes de subir una nueva funcionalidad al repositorio, esto es importante para evitar posibles errores en el futuro.

## Pruebas de API (Lippia)

En esta sección se muestra un enlace de las pruebas de API  realizadas en el pipeline. Se tiene un reporte para efectos de visualizacion con algunas vistas complementarias que muestran como se ejecuto cada test.

> [Reporte Test Lippia API](https://consorcio-digital.gitlab.io/dev/corp/microservicios/bff-cotizador-seguro-auto/dashboard.html)

## Unitarias / E2E  / Coverage 🐛

Ejecutar el siguiente comando para inicializar

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Cobertura 📶

La cobertura de código es una medida (porcentual) en las pruebas de software que mide el grado en que el código fuente de un programa ha sido comprobado.

Sirve para determinar la calidad del test que se lleve a cabo​ y para determinar las partes críticas del código que no han sido comprobadas y las partes que ya lo fueron,​ además se puede utilizar como técnica de optimización dentro de un compilador optimizador para llevar a cabo una eliminación de código muerto, más específicamente sirve para detectar código inalcanzable.

## Instalación 🎉

Ejecutar el siguiente comando para instalar dependencias:

```bash
$ npm install
```

## Documentación 📖

A continuación se explicarán puntos importantes relacionados a la estructura del proyecto, convención de nombres y conceptos de arquitectura. Por otro lado se detallarán los servicios REST que expone este microservicio y las interacciones o dependencias con entidades externas u orígenes de datos.

## Confluence 🔗

```
URL a confluence
```

## Estructura 📂

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

## Conceptos 📚

* **Modules**
    + Organiza la estructura y dependencias del proyecto. [Más Información](https://docs.nestjs.com/modules) 
    +  Generar un módulo mediante consola:
            ````
            nest g module [ResourceName]
            ````

* **Controllers**
    + Clases diseñadas para especificar las rutas de servicios REST, obtener los request HTTP para extraer y manipular el mensaje e invocar a los servicio de negocio que encargados de procesar la solicitud. [Más Información](https://docs.nestjs.com/controllers)
  + Generar un controlador mediante consola:
        ````
        nest g controller [ResourceName]
        ````

* **Services**
    + Clases que contienen la lógica del negocio, reciben desde los controladores los parámetros necesarios para operar y para resolver la petición pueden invocar a uno o varios providers. [Más Información](https://docs.nestjs.com/providers)
    + Generar un service mediante consola:
          ````
          nest g service [ResourceName]
          ````

* **Interceptors**
    + Capa intemedia entre el cliente y el route handler.Sus funciones son agregar lógica extra antes y despues del llamado de un método, transformar el resultado de una función, monitorear tiempo de cada request,etc. [Más Información](https://docs.nestjs.com/interceptors)

* **Filters**
    + Capa que captura todos los errores no manejados a nivel de aplicación. Su función es manejar errores de forma amigable al usuario o capa de cliente. [Más Información](https://docs.nestjs.com/exception-filters)

* **Guards**
    + Tiene una única responsabilidad, verificar si el usuario y/o recurso solicitante pueden acceder al route handler. Su función es manejar la autorización en base a los roles, permisos, etc del usuario. [Más Información](https://docs.nestjs.com/guards)


## Variables 📝

A continuación se describen las variables de entorno del proyecto.

| Nombre                            | Descripción                                                               |
| :-------------------------------- | :------------------------------------------------------------------------ |
| `APP_PORT`                        | Puerto el cual correo el servicio                                         |
| `ACTIVAR_SWAGGER`                 | Activa o desactiva el despliegue de swagger (documentacion)               |
| `USERID_TOKEN_KEY`                | Atributo del token que tiene la informacion del usuario (rut)             |
| `DESACTIVAR_VALIDACION_RUT_TOKEN` | Activa/Desactiva validacion de token en el guard (de cada servicio)       |
| `CHECK_ENVIRONMENT`               | Permite validar en que configuracion de ambiente corre el servicio        |
| `SENTRY_DSN`                      | URL de sentry para registro de los logs                                   |
| `SENTRY_DEBUG`                    | Debug mode                                                                |
| `SENTRY_ENVIRONMENT`              | Ambiente en el cual se registrarán los logs                               |
| `SENTRY_TRACES_SAMPLE_RATE`       | tasa de errores registrados en sentry / se usa valor 1 que es todo.       |
| `GENERIC_HTTP_ERROR`              | Detalle de mensaje de error generico.                                      |


## Swagger 🎮

A continuación se listan los endpoints para acceder a la documentación Swagger del proyecto en los ambientes locales y pre productivos:

* **Microservicios API información geográfica**
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

## API 🏭

A continuación se listan los endpoints que expone este proyecto:

* **Microservicios API información geográfica**
    * HOST DEV:
    ````
    https://bff-cotizador-seguro-auto.corp.integracion.digital.consorcio.cl
    ````
    * HOST QA:
    ````
    https://bff-cotizador-seguro-auto.corp.cert.digital.consorcio.cl
    ````
    * HOST Producción:
    ````
    https://bff-cotizador-seguro-auto.corp.prod.digital.consorcio.cl
    ````

## Versionamiento 🎏

Estas son las ramas donde mantienen las diferentes versiones del código fuente para cada uno de los ambientes:

* Desarrollo:
````
integracion
````
* QA:
````
develop
````
* Producción:
````
master
````

## Equipo 👷

_(Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios)_

* **[Guillermo Briceño](guillermo.briceno@consorcio.cl)**

* **[Oscar León](oleon@bancoconsorcio.cl)** 


## Licencia 📄
```
Copyright (C) Consorcio Digital - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
```

Nest is [MIT licensed](LICENSE).
