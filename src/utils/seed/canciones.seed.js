const mongoose = require('mongoose')
const Plataforma = require('../../API/models/plataformas')
const Cancion = require('../../API/models/canciones')
const { canciones } = require('../../data/seedData')

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    console.log('OK MongoDB ON')

    //limpio colleccion
    await Cancion.deleteMany()
    console.log('Coleccion "Canciones" empty')

    // obtengo plataformas existentes
    const plataformasDocs = await Plataforma.find()
    const plataformasMap = plataformasDocs.reduce((map, plataforma) => {
      map[plataforma.nombre] = plataforma._id // aqui estoy relacionando el nombre con el ObjecTID
      return map
    }, {}) //objeto vacio para rellenar

    //preparo cancinoes con referencias a ObjectdID
    const cancionesParaInsertar = canciones.map((cancion) => {
      const plataformasIDs = cancion.plataformas_disponibles.map(
        (nombrePlataforma) => plataformasMap[nombrePlataforma]
      )
      return { ...cancion, plataformas: plataformasIDs }
    })

    //Full colleccion
    await Cancion.insertMany(cancionesParaInsertar)
    console.log('Canciones OK insert')

    mongoose.disconnect()
    console.log('OFF BBDD')
  })
  .catch((err) => {
    console.error('sorry no pude conectarme al monguito:', err)
  })
