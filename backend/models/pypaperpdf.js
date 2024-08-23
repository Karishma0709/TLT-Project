const mongoose=require("mongoose")
const PdfSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
})


module.exports=PdfModule=mongoose.model('PdfModule',PdfSchema)