# GoodTravel-web

Este proyecto es una aplicación web desarrollada con React y Vite. Proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

## Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:

```
/src
  /assets
  /components
  /pages
  /services
  /styles
  /utils
/public
```

- **/src**: Contiene todo el código fuente de la aplicación.
  - **/assets**: Archivos estáticos como imágenes y fuentes.
  - **/components**: Componentes reutilizables de React.
  - **/pages**: Componentes de página de React.
  - **/services**: Archivos para interactuar con APIs y otras funcionalidades de backend.
  - **/styles**: Archivos de estilos CSS o preprocesadores.
  - **/utils**: Funciones utilitarias y helpers.
- **/public**: Archivos públicos que no pasan por el proceso de construcción.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **react**: Biblioteca para construir interfaces de usuario.
- **react-dom**: Proporciona métodos específicos del DOM que se utilizan en el nivel superior de una aplicación React.
- **vite**: Un build tool que mejora la experiencia de desarrollo.
- **@vitejs/plugin-react**: Plugin oficial de Vite para React que utiliza Babel para Fast Refresh.
- **@vitejs/plugin-react-swc**: Plugin oficial de Vite para React que utiliza SWC para Fast Refresh.
- **eslint**: Herramienta para identificar y reportar patrones encontrados en el código ECMAScript/JavaScript.
- **eslint-plugin-react**: Plugin de ESLint para React.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.\
Empaqueta React en modo de producción y optimiza la construcción para el mejor rendimiento.

### `npm run lint`

Ejecuta ESLint para encontrar y arreglar problemas en el código.

## Contribuir

Las solicitudes de pull son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir lo que te gustaría cambiar.

Asegúrate de actualizar las pruebas según corresponda.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
