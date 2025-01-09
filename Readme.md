# API de plataformas de Música en Streaming

Una API para gestionar plataformas de música en streaming y sus canciones disponibles.

---

## **Descripción**

Este proyecto es una API RESTful desarrollada en Node.js y MongoDB que permite:

- Gestionar plataformas de música (crear, leer, actualizar y eliminar).
- Gestionar canciones (CRUD).
- Relacionar canciones con plataformas.
- Buscar canciones por diferentes criterios.

---

## **Instalación**

1. Clonar el repositorio:  
 
        git clone: https://github.com/MSS1410/API-Streaming-Musica.git

2. Navegar a la carpeta del proyecto:

        cd API-Streaming-Musica

3. Instalar dependencias:

        npm install

4. Generar un archivo .env con los siguientes valores:

        DB_URL= "mongodb+srv://admin:3im91NZXBvGo99KU@cluster002iistreamingmu.lx3x4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster002IISTREAMINGMUSICPLATFORMS"

5. Iniciar el servidor:

        npm start



⚫️ **Endpoints disponibles**


### Canciones

| **Método** | **Ruta**                                | **Descripción**                           |
|------------|-----------------------------------------|-------------------------------------------|
| GET        | `/api/canciones`                       | Obtiene todas las canciones               |
| GET        | `/api/canciones/:id`                   | Obtiene una canción por ID                |
| GET        | `/api/canciones/nombre/:nombre`        | Obtiene una canción por nombre            |
| GET        | `/api/canciones/valoracion/mayor/:valor` | Canciones con valoración mayor a un valor |
| GET        | `/api/canciones/valoracion/menor/:valor` | Canciones con valoración menor a un valor |
| POST       | `/api/canciones`                       | Crea una nueva canción                    |
| PUT        | `/api/canciones/:id`                   | Actualiza una canción                     |
| DELETE     | `/api/canciones/:id`                   | Elimina una canción                       |

### Plataformas

| **Método** | **Ruta**                                | **Descripción**                           |
|------------|-----------------------------------------|-------------------------------------------|
| GET        | `/api/plataformas`                     | Obtiene todas las plataformas             |
| GET        | `/api/plataformas/:id`                 | Obtiene una plataforma por ID             |
| GET        | `/api/plataformas/nombre/:nombre`      | Obtiene una plataforma por nombre         |
| POST       | `/api/plataformas`                     | Crea una nueva plataforma                 |
| PUT        | `/api/plataformas/:id`                 | Actualiza una plataforma                  |
| DELETE     | `/api/plataformas/:id`                 | Elimina una plataforma                    |


✅  **EJEMPLOS**



### Solicitud POST para crear una canción

- **URL:** `/api/canciones`
- **Cuerpo:**

  {
    "nombre": "Konbini Wars",
    "artista": "Yung Beef",
    "discografica": "La Vendición",
    "duracion": 300,
    "valoracion": 4.9,
    "plataformas": ["674f33c06222e15e28ca625b", "674f33c06222e15e28ca625e"]
  }
  

### Solicitud PUT para actualizar una canción

**Cuerpo:**

{
  "nombre": "Konbini Wars (Remix)"
}
