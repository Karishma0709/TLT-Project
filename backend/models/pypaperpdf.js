const mongoose=require("mongoose")
const pyPaperSchema=mongoose.Schema({
    Papertitle:{
        type:String,
        required:true
    },
    paperimage:{
        type:String,
        required:true
    },
    // paperpdf:{
    //     data:Buffer,
    //     contentType:String
    // }
})


module.exports=PrevYearPaperUpload=mongoose.model('PrevYearPaperUpload',pyPaperSchema)
