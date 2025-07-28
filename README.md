# Intro a testing React + Vitest

Cuando realizamos la instalación de React utilizando la herramienta Vite, los test no vendrán por defecto cómo ocurría antes con create-react-app. 

En este repositorio encontrarás una guía paso a paso para configurar tu entorno de testing en React utilizando Vitest

> 💡 **¿Qué necesito?**  
> `vitest`+ `jsdom` + `React Testing Library`


### **1. Instalación de Vitest + jsdom**

Documentaciones 👇

📖https://vitest.dev/guide/

📖https://github.com/jsdom/jsdom#readme

1. instalamos 👇

```bash
npm install -D vitest
```

```bash
npm install -D jsdom
```


2. Modificamos el archivo package.json 👇 
```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest"
``` 
Este script nos sirve para que cada vez que escribamos test en consola sea vitest el que trabaje

3. Modificamos el archivo **`vite.config.js` 👇**

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  **test: {
    globals: true, 
    environment: 'jsdom',
  }**
})
```


Está sería la instalación general, ahora vamos a instalar librerias concretas de React.


### **2. Instalación React testing Library🐙**

Tanto Vitetest como jsdom no son específicos de React, para poder testear todo el comportamiento de React necesitamos de React testing Library que tiene métodos específicos de las acciones que realiza React. Vamos con ello…

Documentaciones 👇

📖https://testing-library.com/docs/react-testing-library/intro/

📖https://testing-library.com/docs/dom-testing-library/intro/

Instalamos 👇

```bash
npm install -D @testing-library/react
npm install -D @testing-library/dom
```
Con esto ya tenemos nuestro entorno listo, ahora toca escribir el código y comenzar a testear👌

Recuerda hacerlo de manera ordenada, 📁 crea una carpeta `test` dentro de `src` y añade un archivo separado para cada componente, por ejemplo: `MiComponente.test.jsx`.
