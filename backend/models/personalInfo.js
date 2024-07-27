const mongoose = require("mongoose")
    const Schema =mongoose.Schema


    const personalInfoSchema=new Schema({
        name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          number: {
            type: String,
            required: true,
          },
          category: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          dob: {
            type: Date,
            required: true,
          },
          state: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          gender: {
            type: String,
            required: true,
          },
          created_at: {
            type: Date,
            default: Date.now,
          }
    })

    const personalInfoDetails=mongoose.model("personalInfoDetails",personalInfoSchema)
    module.exports=personalInfoDetails