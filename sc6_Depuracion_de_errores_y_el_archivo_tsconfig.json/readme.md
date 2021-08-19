## Typescript Seccion 6 : Depuración de Errores y el archivo tsconfig.json
---
*   Este apartado se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json).
    *   Aprenderemos el ¿por qué siempre compila a JavaScript?
    *   Para que nos puede servir el archivo de configuración de TypeScript
    *   Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
    *   Removeremos todos los comentarios en nuestro archivo de producción.
    *   Restringiremos al compilador que sólo vea ciertos archivos o carpetas
    *   Crearemos un archivo final de salida
    *   Aprenderemos a cambiar la version de JavaScript de salida

## Tsconfig -  Typescript 
---
  * En la web de typescript se puede encontrar un apartado especifico para gestionar el tsconfig.json
  * **Link :** [Web Typescript - Tsconfig](https://www.typescriptlang.org/tsconfig)
  * Por defecto las casillas vienen predeterminadas con la preconfiguracion marcada.
  * node_modules por defecto esta **excluido** de la compilacion de ts
  * 

```json
  {
    //Sirve para ver en consola los logs de ts no de js , Definicion:Mapa de representacion propia del archivo de typescript (genera un tercer archivo <filename>.js.map).
    "sourceMap": true 
  } 
```

  * Para realizar una exclusion de archivos se añade dentro del fichero tsconfig al final de las exclusiones generales de ts. : 
```json
{
"sourceMap": true
},
"exclude": [
  "components-testing",
  "node_modules",
  "folder_files"
]
```

* Para incluir ficheros los cuales quieres darle enfasis en tu proyecto puedes hacerlo de la siguiente manera.
* Include solo incluye la parte seleccionada y sus carpetas hijas 

```json

{
"sourceMap": true
},
"exclude": [
  "node_modules",
  "folder_files"
],
"include": [
  "home-component--header",
  "home-component--footer",
  "home-component--nav",
  "home-component--slideshow
]
```

* **outfile:** podemos generar una ruta hacia los ficheros de manera predeterminada a un unico fichero js 

```json
  {
    //Sirve para generar un unico fichero de salida para los ficheros ts unificando todos los ficheros .ts en un unico .js en otra ruta definida
    "outfile": ./components/allTs.js
  } 
```