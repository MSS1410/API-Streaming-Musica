const mongoose = require('mongoose')
const Plataforma = require('../../API/models/plataformas')
const { plataformas } = require('../../data/seedData')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    console.log('OK MONGO ON')

    //Limpio
    await Plataforma.deleteMany()
    console.log('OK Clean Platform')

    //COMpruebo datos antes de insert

    if (!plataformas || plataformas.length === 0) {
      throw new Error('No se encontraron plataformas para insertar')
    }

    plataformas.forEach((plataforma) => {
      if (!plataforma.nombre || !plataforma.descripcion) {
        throw new Error(
          `Eu datinho nai completo no plataforma: ${JSON.stringify(plataforma)}`
        )
      }
    })

    //inserto datos colecc
    await Plataforma.insertMany(plataformas)
    console.log('OK Insert platforms')

    mongoose.disconnect()
    console.log('OFF BBDD')
  })
  .catch((err) => {
    console.error('Error:', err)
  })
