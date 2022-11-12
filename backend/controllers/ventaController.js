import Venta from '../models/Venta.js';

const prueba = (req, res)=> {
    res.send({
        msg:"En esta ruta gestionaremos todas las peticiones correspondiente al Modelo de Venta"
    })
}

const createVentas = async (req, res) => {
    try {
        const venta = new Venta(req.body);
        const ventaGuardado = await venta.save();
        res.json(ventaGuardado); 
    } catch (error) {
        console.error(error.message);
    }
};

const getVenta = async (req, res) => {};

const getVentas = async (req, res) => {};

const updateVentas = async (req, res) => {};

const deleteVentas = async (req, res) => {};

export {
    prueba,
    createVentas,
    getVenta,
    getVentas,
    updateVentas,
    deleteVentas
}; 