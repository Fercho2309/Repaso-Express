import express from 'express';
import {
    prueba
} from '../controllers/usuarioController.js';

const router = express.Router(); /* Crear Manejadores de rutas montabls y modulares */

// Rutas Publicas
router.get('/prueba', prueba);

export default router;