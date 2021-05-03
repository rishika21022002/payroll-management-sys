const express=require("express")
const path=require("path")
const hbs=require("hbs")

const app=express();
app.set("view engine","hbs")

app.set('views', path.join(__dirname, './views/'));

const port=process.env.port|| 80
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{

    res.render("index")

})
app.get("/sam",(req,res)=>{


})

app.post("/reg",async(req,res)=>{
    
     
     res.render("sample",{fname:req.body.fname +" "+  req.body.lname,email:req.body.email,gender:req.body.gender,phone:req.body.phone,age:req.body.age})
    })
app.listen(port,()=>{
    console.log("App is Running")
})
app.get("/salary",(req,res)=>{


})
app.post("/reg",async(req,res)=>{
    
     
    res.render("salary_slip",{fname:req.body.fname +" "+  req.body.lname,email:req.body.email,gender:req.body.gender,phone:req.body.phone,age:req.body.age})
   })