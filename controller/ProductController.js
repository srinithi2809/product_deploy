const Product = require('../model/Product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.addedProduct=async(req,res)=>{
    try{
        const product= await Product.findOne({proId :req.params.id})
        if(!product){
            const addnew= await Product.create(req.body)
        res.json(addnew)
                   }
         else{
            res.json({msg:'Product doesnt exits'})
         }   
        }       
    catch(err){
res.status(500).json({msg:err.msg})
    }
}
exports.updateProduct = async (req, res) =>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({proId: product.proId})
        if(fetchedProduct){
            await Product.updateOne(product)
            res.json(fetchedProduct)
        }
        else{
            res.json({msg: 'Product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
exports.deleteProduct = async (req, res)=>{
    try{
        const delproduct = await Product.findOne({proId: req.params.id,name:req.params.name})
        if(delproduct){
            await Product.deleteOne({proId:delproduct.proId,name:delproduct.name})
            res.json(delproduct)
        }
        else{
            res.json({msg: 'product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}