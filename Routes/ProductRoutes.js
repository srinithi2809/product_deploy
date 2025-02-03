
const productController = require('../controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getSingleProduct)
router.post('/api/productadd',productController.addedProduct)
router.put('/api/productupdate',productController.updateProduct)
router.delete('/api/productdelete/:id/:name',productController.deleteProduct)
module.exports = router



