import express from "express"
import { createNode, getNotes, getNotes1 } from "./database.js"

const app=express()

app.use(express.json());

app.get("/",async (req,res)=>{
    const notes=await getNotes()
    res.send(notes)
})
app.get("/:id",async (req,res)=>{
    const id=req.params.id
    const notes=await getNotes1(id)
    res.send(notes)
})

app.post("/notes",async(req,res)=>{
    const {title,contents}=req.body;
    const note=await createNode(title,contents)
    res.send(note)
})

app.use((err,req,res,next)=>{
console.log(err.stack)
res.status(500).send("Something broke !")
})



app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})