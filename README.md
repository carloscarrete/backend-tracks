
---

# Backend Tracks - API de Gestión de Música

Backend Tracks es una API RESTful desarrollada con **Node.js**, **Express**, **MongoDB/MySQL**, **JWT** y **Multer**. Esta API permite gestionar un catálogo de canciones, incluyendo la autenticación de usuarios, la subida de archivos de audio e imágenes, y la gestión de canciones (CRUD). Además, cuenta con documentación de la API mediante **Swagger** y pruebas unitarias con **Jest**.

---

## Características principales

- **Autenticación JWT**: Registro, inicio de sesión y renovación de tokens.
- **Gestión de canciones**: CRUD completo para canciones, incluyendo la posibilidad de marcar como favoritas.
- **Gestión de archivos**: Subida y eliminación de archivos de audio e imágenes.
- **Documentación de la API**: Disponible en `/api-docs` mediante Swagger.
- **Pruebas unitarias**: Pruebas automatizadas para endpoints clave.
- **Soporte para MongoDB y MySQL**: Configurable mediante variables de entorno.

---

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** o **MySQL** (según configuración)
- **JWT** (autenticación)
- **Multer** (gestión de archivos)
- **Swagger** (documentación de la API)
- **Jest** (pruebas unitarias)

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **MongoDB** o **MySQL** (dependiendo de la configuración)

---

## Configuración del proyecto

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/carloscarrete/backend-tracks.git
   cd backend-tracks
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env-template`.
   - Define las variables necesarias, como `DB_URI`, `JWT_SECRET`, etc.

   Ejemplo:
   ```env
   NODE_ENV=dev
   PORT=3000
   DB_URI=mongodb://localhost:27017/webplayer
   JWT_SECRET=mysecretkey
   ```

4. **Ejecuta el proyecto**:
   ```bash
   npm start
   # o
   yarn start
   ```

   El backend estará disponible en `http://localhost:3000`.

---

## Estructura del proyecto

```
backend-tracks/
├── app.js                  # Punto de entrada del backend
├── config/                 # Configuración de la base de datos
│   ├── mongo.js            # Configuración de MongoDB
│   └── mysql.js            # Configuración de MySQL
├── controllers/            # Controladores para manejar las rutas
│   ├── auth.controller.js  # Controlador de autenticación
│   ├── storage.controller.js # Controlador de archivos
│   └── tracks.controller.js # Controlador de canciones
├── docs/                   # Documentación de la API (Swagger)
│   └── swagger.js          # Configuración de Swagger
├── middleware/             # Middlewares personalizados
│   ├── customHeader.js     # Middleware de cabeceras personalizadas
│   ├── rol.js              # Middleware de roles
│   └── session.js          # Middleware de autenticación
├── models/                 # Modelos de datos (MongoDB/MySQL)
│   ├── index.js            # Exportación de modelos
│   ├── mysql/              # Modelos para MySQL
│   │   ├── storage.js      # Modelo de archivos
│   │   ├── tracks.js       # Modelo de canciones
│   │   └── user.js         # Modelo de usuarios
│   └── nosql/              # Modelos para MongoDB
│       ├── storage.js      # Modelo de archivos
│       ├── tracks.js       # Modelo de canciones
│       └── user.js         # Modelo de usuarios
├── routes/                 # Definición de rutas
│   ├── auth.js             # Rutas de autenticación
│   ├── index.js            # Exportación de rutas
│   ├── storage.js          # Rutas de archivos
│   └── tracks.js           # Rutas de canciones
├── storage/                # Almacenamiento de archivos subidos
├── tests/                  # Pruebas unitarias
│   ├── app.test.js         # Pruebas generales
│   ├── auth.test.js        # Pruebas de autenticación
│   ├── storage.test.js     # Pruebas de archivos
│   ├── tracks.test.js      # Pruebas de canciones
│   ├── dump/               # Archivos de prueba
│   └── fixtures/           # Datos de prueba
│       ├── authData.js     # Datos de prueba para autenticación
│       ├── storageData.js  # Datos de prueba para archivos
│       └── tracksData.js   # Datos de prueba para canciones
├── utils/                  # Utilidades y helpers
│   ├── handleError.js      # Manejo de errores
│   ├── handleJWT.js        # Manejo de JWT
│   ├── handleLogger.js     # Manejo de logs
│   ├── handlePassword.js   # Manejo de contraseñas
│   ├── handlePropertiesEngine.js # Manejo de propiedades de la base de datos
│   ├── handleStorage.js    # Manejo de archivos
│   └── handleValidator.js  # Manejo de validaciones
├── validators/             # Validadores para las solicitudes
│   ├── auth.js             # Validadores de autenticación
│   ├── storage.js          # Validadores de archivos
│   └── tracks.js           # Validadores de canciones
├── .env-template           # Plantilla para variables de entorno
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

---

## Documentación de la API

La API está documentada mediante Swagger. Para acceder a la documentación, inicia el servidor y visita:

```
http://localhost:3000/api-docs
```

---

## Pruebas unitarias

El proyecto incluye pruebas unitarias para los endpoints clave. Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm test
# o
yarn test
```

---

## Scripts disponibles

- **`npm start`**: Inicia el servidor de backend.
- **`npm run dev`**: Inicia el servidor en modo desarrollo con nodemon.
- **`npm test`**: Ejecuta las pruebas unitarias.

---

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature o corrección: `git checkout -b mi-feature`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva feature'`.
4. Sube tus cambios: `git push origin mi-feature`.
5. Abre un Pull Request en GitHub.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.



