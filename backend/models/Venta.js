import mongoose from "mongoose";

const ventaShema = mongoose.Schema({

    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },

    articulos:{
        type:Array,
        require: true
    },

    total: {
        type: Number,
        require: true,
        trim: true
    },

    confirmado:{
        type: Boolean,
        default: false
    },

    estado:{
        type: String,
        default: "vigente"
    },
},

{
    timestamps: true
});

const Venta = mongoose.model('Venta', ventaShema);

export default Venta;
