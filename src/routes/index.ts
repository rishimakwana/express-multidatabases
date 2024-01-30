import express from 'express';
import {
    createCategory,
    createInventory,
    createShipment,
    createOrder,
    createProduct,
} from '../controller';

const router = express.Router();

router.post('/category', createCategory);
router.post('/inventory', createInventory);
router.post('/shipment', createShipment);
router.post('/order', createOrder);
router.post('/product', createProduct);

export default router;