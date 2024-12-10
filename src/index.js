const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cancionesRoutes = require('./API/routes/canciones')
const plataformasRoutes = require('./API/routes/plataformas')

//cargo entorno
dotenv.config()
//conecto base
connectDB()
//inicializo instancia express en aoo
const app = express()
//middle xra parseo a json
app.use(express.json())

//ruteo
app.use('/api/canciones', cancionesRoutes)
app.use('/api/plataformas', plataformasRoutes)

//ruta por defecto

app.use((req, res, next) => {
  res.status(404).json({ message: '...API Streaming Music...' })
})

// puerto

const PORT = process.env.PORT || 4000

// inicializar serverr
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
