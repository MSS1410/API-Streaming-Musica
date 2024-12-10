const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Éxito al connectar con la base de datos')
  } catch (error) {
    console.error(`Error al conectar con la base de datos:${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
