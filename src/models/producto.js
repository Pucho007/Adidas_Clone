const {Schema, model}=require('mongoose');

const ProductoSchema=new Schema({
    _id:{type:Number},
    nombre:{type: String},
    precio:{type: Number},
    imagenes:{type: Array},
    descripcion:{type:String},
    marca:{type:String},
    tallas:{type: Array},
    etiquetas:{type:Array}
});

module.exports=model('Producto',ProductoSchema);