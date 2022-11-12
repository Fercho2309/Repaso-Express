import express from 'express';
import {
    prueba,
    getProductos,
    getProducto,
    createProductos,
    updateProductos,
    deleteProductos
} from '../controllers/productoController.js';

const router = express.Router(); 

// Rutas Publicas
router.get('/prueba', prueba);

// Rutas Gestion Producto
router.get('/get', getProductos);
router.get('/get/:id', getProducto);
router.post('/create', createProductos);
router.get('/update/:id', updateProductos);
router.delete('/delete', deleteProductos);



export default router;