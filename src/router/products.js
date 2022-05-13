const express = require('express');

const router = express.Router()

const productsController = require('../controllers/products')


// router.get('/getproducts', (req,res)=>{
//     res.json('register')
// })

router.post('/postproduct',productsController.postProduct)
router.get('/getproducts',productsController.getProducts)

module.exports = router;