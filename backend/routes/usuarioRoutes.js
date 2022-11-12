import express from 'express';
import {
    prueba,
    registrar,
    confirmar
} from '../controllers/usuarioController.js';

const router = express.Router(); /* Crear Manejadores de rutas montabls y modulares */

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);

export default router;

/* 
GET: OBTENER INFORMACION DE ALGO CREADO,
POST: CREAR,
PATCH: ACTUALIZAR,
DELETE: BORRAR 
PUT: CONFIRMAR VERDADERO O FALSO*/