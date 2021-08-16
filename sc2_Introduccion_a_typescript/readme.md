# Typescript Seccion 2 : Introduccion a Typescript
---
## Como empezar
---
*   Dependiendo del sistema operativo con el que te encuentres ya sea windows , macosx o linux tienes que tener instalado node de manera recomendada 

### Configuraciones e Instalaciones
---
*   Para instalar node:
*   **Windows**
```bash
// En windows deberias instalar la version que disponen en su web
// Una vez instalado comprobar version
line cmd: <c:/node --version>
line cmd: <c:/npm  --version>
//Es recomendado tener instalado las versiones lts
```
*   **Linux**
```bash
// En linux desde terminal podemos instalarlo con el siguiente comando.
sudo apt-get update && apt-get upgrade -y
sudo apt-get install nodejs
sudo npm i -g n
sudo n stable
npm --version
node --version
```

*   Para instalar typescript:
```bash
npm i -g typescript
// puedes ver la version con el comando
tsc --version
```

### Realizar <"hola mundo">
```tsc
const msg="hola mundo"
console.log(msg)
```
* Ejecutar el comando tsc con el nombre del fichero

```
   c:/ tsc app.ts
```

### Fichero TsConfig.json
*  El fichero tsconfig.json se crea con el comando **tsc --init**
*  Es un archivo .json permite personalizar la configuracion de typescript en el proyecto que se quiera realizar.
*  Como recomendacion es aconsejable usar typescript en estricto **"strict": true**
*  Para hacer que typescript tenga un seguimiento y no tener que realizar tsc <filename.extension> se recomienda utilizar **tsc --watch**