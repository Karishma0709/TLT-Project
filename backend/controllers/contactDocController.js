const multer=require("multer");
const ContactDocumentDetails = require('../models/contactDocument');


const storage=multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,"./upload")
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`)
  }
});
const upload=multer({storage})


const saveContactDocumentDetails =post("/upload",upload.single("profileImage"), (req,res )=>{
  console.log(req.body)
  const newImage=new ImageModel({
    image:{data:req.file.filename,
      contentType:'image/png'
    }
  })
  newImage.save()
  .then(()=>res.send("successfully uploaded")).catch((err)=>console.log(err))
  return res.redirect("/jet/documents");
  })



// const saveContactDocumentDetails = async (req, res) => {
//   const { photo, adhaarPhoto } = req.body;

//   try {
//     const newContactDocumentDetails = new ContactDocumentDetails({
//       photo,
//       adhaarPhoto,
//     });

//     await newContactDocumentDetails.save();
//     res.status(201).send({ message: 'Contact document details saved successfully' });
//   } catch (error) {
//     res.status(400).send({ message: 'Error saving contact document details', error });
//   }
// };

const findContactDocumentDetails = async (req, res) => {
  try {
    const contactDocumentDetails = await ContactDocumentDetails.find();
    res.status(200).send(contactDocumentDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving contact document details', error });
  }
};

module.exports = { saveContactDocumentDetails, findContactDocumentDetails };
