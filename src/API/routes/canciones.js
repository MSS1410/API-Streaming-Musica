const {
  getCanciones,
  getCancionByID,
  postCancion,
  putCancion,
  deleteCancion,
  getCancionesWorstValorated,
  getCancionesBestValorated,
  getCancionByName
} = require('../controladores/canciones')

const router = require('express').Router()

router.get('/:id', getCancionByID)
router.put('/:id', putCancion)
router.get('/valoracion/mayor/:valor', getCancionesBestValorated)
router.get('/valoracion/menor/:valor', getCancionesWorstValorated)
router.delete('/:id', deleteCancion)
router.get('/nombre/:nombre', getCancionByName)
router.post('/', postCancion)
router.get('/', getCanciones)

module.exports = router
