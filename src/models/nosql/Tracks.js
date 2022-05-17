const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const trackSchema = new mongoose.Schema(
    {
        name : {
            type : String,
        },
        album: {
            type : String,
        },
        cover : {
            type : String,
            validate : {
                validator : (req) => {
                    return true;
                },
                msg: "ERROR URL",
            },
        },
        artist : {
            name : {
                type : String,
            },
            nickName : {
                type : String,
            },
            nationality : {
                type : String,
            },
        },
        duration : {
            start : {
                type : Number,
            },
            end : {
                type : Number,
            },
        },
        mediaId : { //id de un objeto de otra coleccion
            type: mongoose.Types.ObjectId,
        },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

trackSchema.plugin(mongooseDelete,{ overrideMethods : "all"}); //Sobreescribe los metodos nativos de mongoose
// En los registros de la db aparece una propiedad ´deleted : false´, indicando que no se le ha aplicado un borrado lógico 
// si elimino aparece en true
// si listo items no aparece
module.exports = mongoose.model("Tracks",trackSchema, "tracks");