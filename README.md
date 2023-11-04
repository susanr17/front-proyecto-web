# README - Lógica del Front-End

## Introducción

Este repositorio contiene archivos relacionados con la lógica del front-end de la aplicación. Aquí encontrarás componentes esenciales que gestionan la autenticación, servicios, enrutamiento y permisos de seguridad. Estos archivos son cruciales para el funcionamiento de la interfaz de usuario y la interacción con el backend.

## Contenido del Repositorio

A continuación, se describen los archivos y carpetas incluidos en este repositorio:

1. **Interceptors:**
   - `auth-interceptor.ts`: Este interceptor se utiliza para interceptar las solicitudes HTTP y adjuntar encabezados de autenticación antes de enviarlas al servidor.

2. **Código TypeScript (TS) del Inicio de Sesión:**
   - `login.component.ts`: Este archivo contiene la lógica del componente de inicio de sesión. Permite a los usuarios autenticarse en la aplicación.

3. **Servicios:**
   - `inventory.service.ts`: Este servicio se encarga de interactuar con el backend para realizar operaciones relacionadas con el módulo de mantenimiento.

4. **Enrutamiento:**
   - `app-routing.module.ts`: Este archivo define las rutas de la aplicación y cómo se aplican los permisos de seguridad a través de los guards.

5. **Guards:**
   - `acceso.guard.ts y rol.guard.ts`: Estos guards se utiliza para proteger rutas que requieren autenticación. Verifica si el usuario tiene acceso antes de permitir el acceso a la ruta.

6. **Módulo Completo de Mantenimiento:**
   - `formulas`: Estos archivos contiene los componentes, relacionados con el módulo de formulas de la aplicación.

## Contacto

Si tienes alguna pregunta, sugerencia o comentario sobre este proyecto, no dudes en ponerte en contacto en la dirección de correo electrónico [sroldanm@umg.edu.gt].
