const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())
console.log('changes')
app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://gsrinithi6:srisaec1133@mycluster.f9rhp.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

 app.get('/', (req, res)=>{
    res.send('server reacted...')
 })
