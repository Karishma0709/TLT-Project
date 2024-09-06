const mongoose=require("mongoose")
const pyPaperSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pyimage:{
        data:Buffer,
        contentType:String
    },
    pypdf:{
        data:Buffer,
        contentType:String
    }
})


module.exports=pyPaperModule=mongoose.model('pyPaperModule',pyPaperSchema)