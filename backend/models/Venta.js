import mongoose from "mongoose";

const ventaShema = mongoose.Schema({

    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usario"
    },

    articulos:{
        type:Array,
        require: true
    },

    confirmado:{
        type: Boolean,
        default: false
    }
},

{
    timestamps: true
});

const Venta = mongoose.model('Venta', ventaShema);

export default Venta;
