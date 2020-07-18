const express = require('express')
const {uuid} = require('uuidv4')
const cors  = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const vec = []

app.get('/',(req,res)=>{
    return res.json(vec)
})
app.post('/',(req,res)=>{
    const { title, owner} = req.body

    const projeto = {id: uuid(), title, owner}

    vec.push(projeto)
    return res.send(projeto)

})
app.get('/ola',(req,res)=>{
    return res.json('olá')
})


app.listen(3333,()=>console.log('🚀🚀 tudo okay ❤')) 