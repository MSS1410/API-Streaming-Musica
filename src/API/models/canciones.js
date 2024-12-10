const mongoose = require('mongoose')

const cancionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    artista: { type: String, required: true },
    discografica: { type: String, required: true },
    duracion: { type: Number, required: true },
    valoracion: { type: Number, required: true, min: 1, max: 5 },
    plataformas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plataforma' }] // Referencia directa
  },
  { timestamps: true }
)
module.exports = mongoose.model('Cancion', cancionSchema, 'canciones')
