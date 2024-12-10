# API de plataformas de Musica en Streaming

Una Api para gestionar plataformas de música en streaming y sus canciones disponibles

------------------------------------------------------------------------------------------------

## **Descripcion**

Este proyecto es una API RESTful desarrollada en Node.js y MongoDB que permite:
-Gestionar plataformas de música (crear, leer, actualizar y eliminar)
-Gestionar canciones (CRUD)
-Relacionar canciones con plataformas
-Buscar canciones por diferentes criterios

------------------------------------------------------------------------------------------------

## **Instalación**

1. Clonar repositorio:  
   git clone https://github.com/MSS1410/API-Streaming-Musica.git

2. Navega carpeta Proyecto: cd API-Streaming-Musica

3. Instala dependencias : npm install

4. Genera .env con los siguientes valores:
       DB_URL=mongodb+srv://<TU_USUARIO>:<TU_PASSWORD>@cluster0.mongodb.net/<TU_DB>
       PORT=3010

5. Inicia el servidor: npm start

(No se de seguro que este sea el proceso correcto para que ustedes puedan realizar la conexión, espero que si, disculpen cualquien error)

------------------------------------------------------------------------------------------------


 ##Enpoints disponibles:
 
 **Canciones**
 
 
--------Método-- Ruta-------------------Descripción
 - GET          	/api/canciones	        -------                         Obtiene todas las canciones
 - GET	        /api/canciones/:id	        -------                         Obtiene una canción por ID
 - GET	     /api/canciones/nombre/:nombre	        -------                         Obtiene una canción por nombre
 - GET	    /api/canciones/valoracion/mayor/:valor-------	      Canciones con valoración mayor a valor
 - GET	    /api/canciones/valoracion/menor/:valor	-------      Canciones con valoración menor a valor
 - POST	         /api/canciones	                -------                    Crea una nueva canción
 - PUT	         /api/canciones/:id           -------                     	Actualiza una canción
- DELETE	         /api/canciones/:id	         -------                       Elimina una canción

**Plataformas**

--------Método---- Ruta-------------------Descripción
- GET	       ----   /api/plataformas	        -------------------------          Obtiene todas las plataformas
- GET	        ----      /api/plataformas/:id	   ---------------------      Obtiene una plataforma por ID
- GET	       ----   /api/plataformas/nombre/:nombre---- Obtiene una plataforma por nombre
- POST        ---- 	/api/plataformas           	 -----------------------     Crea una nueva plataforma
- PUT	      ----     /api/plataformas/:id	     --------------------         Actualiza una plataforma
- DELETE      ----    	/api/plataformas/:id	    --------------      Elimina una plataforma



**Ejemeplos**

- solicitud POST para crear una canción:
        URL: /api/canciones
        Cuerpo: 
       
        {
         "nombre": "Konbini Wars",
          "artista": "Yung Beef",
          "discografica": "La Vendición",
         "duracion": 300,
         "valoracion": 4.9,
              "plataformas": ["674f33c06222e15e28ca625b", "674f33c06222e15e28ca625e"]
            }


- solicitud PUT para actualizar una canción:
URL: /api/canciones/:id
Cuerpo: 
            {
            "nombre": "Konbini Wars (Remix)"
            }

**Tecnologías**
- Node.js: Entorno de desarrollo.
- Express.js: Framework para construir la API.
- MongoDB: Base de datos NoSQL.
- Mongoose: ODM para MongoDB.
- dotenv: Para manejar variables de entorno.



