const { Router } = require("express")
const { getAllCoctels, getOneCoctel, createCoctel, updateCoctel, deleteCoctel, getCoctelByName } = require("../controllers/coctel.controller")

const router = Router()

router.get('/', getAllCoctels)
router.get('/:id', getOneCoctel)
router.get('/name/:name', getCoctelByName)
router.post('/', createCoctel)
router.put('/:id', updateCoctel)
router.delete('/:id', deleteCoctel)

module.exports = router