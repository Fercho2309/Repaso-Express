import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helper/generarld.js";

const usuarioShema = mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim: true,
    },

    email:{
        type: String,
        unique: true,
        trim: true,
    },

    password:{
        type: String,
        required: true,
    },

    telefono:{
        type: String,
        default: null,
        trim: true,
    },

    direccion:{
        type: String,
        default: null,
        trim: true,
    },

    web:{
        type: String,
        default: null,
        trim: true,
    },

    token:{
        type: String,
        default: generarId(),
    },

    confirmado:{
        type: Boolean,
        default: false,
    },

    rol:{
        type: String,
        default: null,
        trim: true,
    }

})

// Antes de Guardar el Usario Hashear el Password

usuarioShema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

//Confirmar Password del Usuario, de esta funcion devuelve verdadero o falso
usuarioShema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
}

const Usuario = mongoose.model('Usuario', usuarioShema);

export default Usuario;
