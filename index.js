




const  express=require('express')
const db=require('./Datalocation/db')
const app=express()
const cors=require('cors')
const port=8000
app.use(express.json())
const coursOption={
origin:"https://new-data-1.onrender.com",
method:"GET,POST,PUT,DELETE,PATCH,HEAD   ",
credentials:true,
}


const router=require('./router/auth-router')

app.use(cors(coursOption))
app.use("/app/auth",router)

app.get('/hell', (req, res) => {
    res.send('Hello World!')
  })


db().then(()=>{

  app.listen(port,()=>{

   console.log(`surver is running at port:${port}`)    

  })

})




