const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { productSchema } = require('../validator/productValidator');
const validate = require('../middleware/validatoreMiddleware');
const auth = require('../middleware/authMiddleware')


router.post('/',auth,validate(productSchema), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id',auth,validate(productSchema), productController.updateProduct);
router.delete('/:id',auth,productController.deleteProduct)


module.exports = router;