// https://expressjs.com/es/
/* Importamos todas las Funcionalidades necesarias */
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fileupload from 'express-fileupload';

import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import ventaRoutes from './routes/ventaRoutes.js';


const PORT = process.env.PORT || 4000;
dotenv.config(); /* Para que Acepte las Variables de Entorno */

// Se le agrega toda la funcionalidad del servidor de express
const app = express(); 
app.use(express.json()); /* Indicamos a Nuestro Servidor que la Informacion la Vamos a Recibir y Enviar a traves de JSON*/
 
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './files'
}))

conectarDB(); /* Funcion que se Encarga de Hacer la conexion con la BD */

// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
const dominiosPermitidos = [process.env.FRONTEND_URL];

/* Solo Permite el Acceso a Dominios que se establece en el Frontend */

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del Request esta permitido
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'));
        } 
    }
};

app.use(cors(corsOptions));

app.use('/api/usuarios', usuarioRoutes); /* Gestion Usuarios */

app.use('/api/productos', productoRoutes); /* Gestionar Productos */ 

app.use('/api/ventas', ventaRoutes); /* Gestionar Ventas */



app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});