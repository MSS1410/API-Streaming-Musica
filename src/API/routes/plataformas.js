const {
  getPlataformas,
  getPlataformasById,
  deletePlataforma,
  putPlataforma,
  getPlataformaByName,
  postPlataforma
} = require('../controladores/plataformas')

const router = require('express').Router()

router.get('/:id', getPlataformasById)
router.put('/:id', putPlataforma)
router.delete('/:id', deletePlataforma)
router.get('/nombre/:nombre', getPlataformaByName)
router.post('/', postPlataforma)
router.get('/', getPlataformas)

module.exports = router
