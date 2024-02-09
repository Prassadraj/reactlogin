let express =require('express')
let collection=require('./mongo')
let cors=require('cors')
let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})
app.post('/',async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json('exist')
        }
        else{
            res.json('notexist')


        }
    }
    catch(e){
        res.json("notexist")
    }
})
app.post('/register',async(req,res)=>{
    const {email,password}=req.body
    const data={email:email,
                password:password}
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
            
        }
    }
    catch(e){
        res.json("notexist")
    }
})
const port=process.env.PORT || 3003
app.listen(port,()=>{
    console.log(`Port Conneted ${port}`);
})