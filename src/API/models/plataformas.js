const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  canciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cancion' }]
})

module.exports = mongoose.model('Plataforma', plataformaSchema)
