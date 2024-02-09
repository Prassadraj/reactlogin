
let mongoose=require('mongoose')
mongoose.connect('mongodb+srv://prassadpr10:prassadpr10@cluster0.decbeum.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("mongo Connect"))
.catch(()=>{
    console.log("check DB")
})

let newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true

}, 
     password:{
        type:String,
        required:true
     }


})

let collection=mongoose.model('collection',newSchema)
module.exports=collection