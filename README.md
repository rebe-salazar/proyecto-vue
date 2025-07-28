Como parte de la aplicación práctica del framework Vue JS, se desarrolló una página web sencilla con contenido informativo sobre el propio framework. El propósito fue integrar de manera básica algunos de los componentes e ideas fundamentales de Vue, empleando su sintaxis declarativa y enlazado de datos, dentro de una estructura HTML tradicional.

Objetivo de la página

La página fue diseñada con un enfoque informativo. Incluye una sección de navegación, contenido sobre la historia y características principales de Vue JS, y un pequeño formulario de contacto con datos manejados a través de Vue. Esta elección se hizo con base en la facilidad de aprenderlo y de implementarlo apropiadamente en cortos periodos de tiempo, permitiendo así cumplir con los objetivos del proyecto sin recurrir a complejidades adicionales.

Herramientas utilizadas:

Visual Studio Code para escribir y organizar el código.

Navegador web (Google Chrome) para pruebas visuales.

Vue JS versión 3, enlazado mediante CDN para evitar instalaciones adicionales.

Archivo CSS externo vinculado para aplicar estilos.

Imágenes almacenadas localmente en una carpeta /img.

Estructura del proyecto:

El proyecto consiste en un archivo HTML que incluye:

Una barra de navegación con enlaces internos.

Secciones identificadas para Historia, Características, Ventajas y Consideraciones.

Una imagen ilustrativa del logo de Vue JS.

Un formulario de contacto con tres campos básicos enlazados mediante v-model.

Iconos sociales generados dinámicamente con v-for.

Uso de directivas @submit.prevent, v-model, v-for, :key y :title propias de Vue JS.


Consideraciones técnicas

El proyecto no requiere configuración avanzada ni conexión a base de datos.

Funciona completamente de forma local, lo que facilita su presentación sin depender de internet, salvo por el CDN de Vue.

El formulario no realiza envíos reales, ya que el enfoque fue estructural y de uso de v-model.

Las rutas de los archivos (como imágenes y CSS) fueron adaptadas para una estructura de carpetas simple.

El código está comentado para facilitar su comprensión y evaluación.


********************************************************************************************************************************************



# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
