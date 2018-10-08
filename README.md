# VR TODAY

## Descripción

Práctica front-end usando WEBPACK:
- Creación de bundle y entorno de desarrollo con WEBPACK + npm modules
- Creación una estructura de componentes y servicios
- Creación de plantilla SASS para tener un estandar de diseño
- Responsive Web design

## Instalación

Instalar dependecias: *npm install*

Renombrar fichero *.env.example* a *.env* e indicar url donde se servira base de datos.

Se puede usar a modo de ejemplo mock data con JSON-SERVER. Para esto, iniciar con *npm run server* que inicializara JSON-SERVER en *localhost:8000*. Indicar como variable de entorno API_URL esta url donde se va a servir la base de datos (esto se indica en fichero .env antes comentado). La base de datos utilizada a modo de ejemplo esta en src/data/db.json

## Ejecución

Para ejecutar en modo de desarrollo: *npm start*. Esto utilizará *webpack-dev-server* para servir la distribucion (por defecto en localhost:3000, la distribucion servida es generada en memoria no en disco)

Para ejeutar en modo de produccion: *npm run build*. Esto creara una distribucion optimizada en ./dist/