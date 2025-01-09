const Plataforma = require('../models/plataformas.js')

const getPlataformas = async (req, res) => {
  try {
    const plataformas = await Plataforma.find().populate('canciones')
    res.status(201).json(plataformas)
  } catch (err) {
    res.status(400).json({ message: 'Error al obtener las plataformas' })
  }
}

const getPlataformasById = async (req, res) => {
  try {
    const { id } = req.params
    const platformID = await Plataforma.findById(id).populate('canciones')
    if (!platformID) return res.status(404).json({ message: 'ID no valido' })
    res.status(200).json(platformID)
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener plataforma' })
  }
}

const postPlataforma = async (req, res) => {
  try {
    const nuevaPlatform = new Plataforma(req.body)
    const plataformaGuardada = await nuevaPlatform.save()
    res.status(200).json(plataformaGuardada)
  } catch (err) {
    res.status(400).json(err)
  }
}

const putPlataforma = async (req, res) => {
  try {
    const { id } = req.params
    const nuevoDataPlatf = req.body

    // busco plat existente
    const platExiste = await Plataforma.findById(id)
    if (!platExiste) {
      return res.status(404).json({ message: 'Plataforma no found' })
    }
    // combine songs exisyentes con las nuevas si las tenemos
    if (nuevoDataPlatf.canciones) {
      nuevoDataPlatf.canciones = [
        ...new Set([
          ...platExiste.canciones.map((id) => id.toString()),
          nuevoDataPlatf.canciones
        ])
      ]
    }
    const plataformaActualizada = await Plataforma.findByIdAndUpdate(
      id,
      nuevoDataPlatf,
      { new: true }
    ).populate('canciones')

    res.status(200).json(plataformaActualizada)
  } catch (err) {
    res.status(400).json({ message: 'Imposible actualizar' })
  }
}

const deletePlataforma = async (req, res) => {
  try {
    const { id } = req.params
    const plataformaEliminada = await Plataforma.findByIdAndDelete(id)
    if (!plataformaEliminada)
      return res
        .status(404)
        .json({ message: 'No se ha encontrado la plataforma a Eliminar' })
    res.status(200).json(plataformaEliminada)
  } catch (err) {
    res.status(400).json({ message: 'Error al eliminar la plataforma' })
  }
}

const getPlataformaByName = async (req, res) => {
  try {
    const { nombre } = req.params
    const plataformaName = await Plataforma.findOne({ nombre: nombre })
    if (!plataformaName) {
      return res
        .status(404)
        .json({ message: 'No disponemos de esa plataforma' })
    }
    res.status(200).json(plataformaName)
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar plataforma' })
  }
}

module.exports = {
  getPlataformas,
  getPlataformasById,
  getPlataformaByName,
  deletePlataforma,
  putPlataforma,
  postPlataforma
}
