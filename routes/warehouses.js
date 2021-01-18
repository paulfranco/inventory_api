const express = require('express');
const { 
    getWarehouses, 
    getWarehouse, 
    createWarehouse, 
    updateWarehouse, 
    deleteWarehouse } 
    = require('../controllers/warehouses');

const router = express.Router();

router
    .route('/')
    .get(getWarehouses)
    .post(createWarehouse)
    

router.route('/:id')
.get(getWarehouse)
.put(updateWarehouse)
.delete(deleteWarehouse);


module.exports = router;