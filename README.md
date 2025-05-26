# AdventyTravel-web 🌎✈️

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

Aplicación web moderna para descubrir destinos, experiencias y servicios turísticos, desarrollada con React y Vite.

---

## Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Scripts Disponibles](#scripts-disponibles)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Internacionalización](#internacionalización)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Características

- ⚡️ Interfaz rápida y responsiva con React + Vite
- 🌍 Internacionalización con i18next
- 🎨 UI moderna con Material-UI y Emotion
- 🗺️ Páginas de destinos, experiencias, hoteles y más
- 🔄 Animaciones fluidas con Framer Motion y React Spring
- 🔒 Manejo de estado global con Redux Toolkit

---

## Estructura del Proyecto

```
src/
  components/      # Componentes reutilizables
  pages/           # Páginas principales
  assets/          # Imágenes y recursos estáticos
  store/           # Configuración de Redux
  i18n/            # Internacionalización
  App.jsx          # Componente raíz
  main.jsx         # Punto de entrada
```

---

## Dependencias

**Principales:**

- `@emotion/react`, `@emotion/styled` – Estilos CSS-in-JS
- `@mui/material`, `@mui/icons-material` – Componentes y íconos Material UI
- `@reduxjs/toolkit`, `react-redux` – Manejo de estado global
- `framer-motion`, `@react-spring/web` – Animaciones
- `i18next`, `react-i18next` – Internacionalización
- `react-router-dom` – Enrutamiento
- `react-icons`, `react-phone-input-2` – Íconos y entrada de teléfono

**Desarrollo:**

- `eslint`, `@eslint/js`, `eslint-plugin-react` – Linting
- `@vitejs/plugin-react`, `vite` – Build y desarrollo
- `@types/react`, `@types/react-dom` – Tipos para TypeScript (si aplica)

---

## Scripts Disponibles

| Comando           | Descripción                                 |
|-------------------|---------------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo            |
| `npm run build`   | Construye la app para producción            |
| `npm run preview` | Previsualiza la app construida              |
| `npm run lint`    | Ejecuta ESLint para analizar el código      |

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/AdventyTravel-web.git
   cd AdventyTravel-web
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## Ejecución

- Servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Build de producción:
  ```bash
  npm run build
  ```
- Previsualización:
  ```bash
  npm run preview
  ```

---

## Internacionalización

El proyecto soporta múltiples idiomas usando `i18next` y `react-i18next`. Puedes agregar nuevos idiomas editando los archivos en `src/i18n/`.

---

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request. Asegúrate de seguir las buenas prácticas de código y ejecutar `npm run lint` antes de enviar cambios.

---

## Licencia

Este proyecto está bajo la licencia MIT.

---
