const Cancion = require('../models/canciones')

const getCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.find().populate('plataformas')
    res.status(200).json(canciones)
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las canciones' })
  }
}

const getCancionByID = async (req, res) => {
  try {
    const { id } = req.params
    const cancionID = await Cancion.findById(id).populate('plataformas')
    if (!cancionID)
      return res
        .status(404)
        .json({ message: 'Cancion no disponible en nuestras plataformas' })
    res.status(200).json(cancionID)
  } catch (err) {
    res.status(500).json({ message: 'Cancion no Available' })
  }
}

const postCancion = async (req, res) => {
  try {
    const nuevaCancion = new Cancion(req.body)
    const cancionGuardada = await nuevaCancion.save()
    res.status(201).json(cancionGuardada)
  } catch (err) {
    res.status(400).json(err)
  }
}

const putCancion = async (req, res) => {
  try {
    const { id } = req.params
    // tramits para NO borrar datos relacionados al actualizar
    const nuevoData = req.body
    //busco cancion existente
    const cancionExiste = await Cancion.findById(id)
    if (!cancionExiste) {
      return res.status(404).json({ message: 'Cancion no existe' })
    }

    // mantengo las plataformas relacionadas
    if (nuevoData.plataformas) {
      nuevoData.plataformas = [
        ...new Set([...cancionExiste.plataformas, ...nuevoData.plataformas])
      ]
    }
    const cancionActualizada = await Cancion.findByIdAndUpdate(id, nuevoData, {
      new: true
    })

    res.status(200).json(cancionActualizada)
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la canción' })
  }
}

const deleteCancion = async (req, res) => {
  try {
    const { id } = req.params
    const cancionEliminada = await Cancion.findByIdAndDelete(id)
    if (!cancionEliminada) {
      return res
        .status(404)
        .json({ message: 'No fue posible eliminar la cancion' })
    }

    res.status(200).json({ message: 'Cancion eliminada', cancionEliminada })
  } catch (err) {
    res.status(400).json({ message: 'No puede Eliminarse' })
  }
}
const getCancionByName = async (req, res) => {
  try {
    const { nombre } = req.params
    const cancionName = await Cancion.findOne({ nombre: nombre })
    // lo de arriba es para que no le importen las minus o mayus
    if (!cancionName) {
      return res.status(404).json({ message: 'No disponemos de esta cancion' })
    }
    res.status(200).json(cancionName)
  } catch (err) {
    res.status(500).json({ message: 'Error en la busqueda de canción' })
  }
}

const getCancionesBestValorated = async (req, res) => {
  try {
    const { valor } = req.params
    const cancionesBV = await Cancion.find({
      valoracion: { $gt: parseFloat(valor) }
    }).populate('plataformas')
    if (cancionesBV.length === 0) {
      return res
        .status(404)
        .json({ message: 'No hay canciones con valoracion mayor a ' + valor })
    }
    res.status(200).json(cancionesBV)
  } catch (err) {
    res.status(400).json({
      message: 'Error al buscar songs Best valorated',
      error: err.message
    })
  }
}

const getCancionesWorstValorated = async (req, res) => {
  try {
    const { valor } = req.params
    const cancionWV = await Cancion.find({
      valoracion: { $lt: parseFloat(valor) }
    }).populate('plataformas')
    if (cancionWV.length === 0) {
      return res
        .status(404)
        .json({ message: 'No hay canciones con valoracion menor a ' + valor })
    }
    res.status(200).json(cancionWV)
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Error al buscar canciones', error: err.message })
  }
}
module.exports = {
  getCanciones,
  getCancionByID,
  getCancionByName,
  getCancionesBestValorated,
  getCancionesWorstValorated,
  postCancion,
  putCancion,
  deleteCancion
}
