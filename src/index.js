const express = require("express");
var emailValidator = require("email-validator");
require( "./db")
const Product = require("./models")

const app = express();
app.use(express.json());

app.post('/api/products', async (req, res) => {
    try 
    {   
        if(emailValidator.validate(email)) 
        {
            return res.status(201).send("email is valid")
        }
        else
        {
            return res.status(500).send("email is invalid")
        }
        const products = new Product({
            name: req.body.name,
            email: req.body.email
        })
            await product.save();
        //console.log(req.body.title);
        return res.status(201).send(products)
    }
    catch (e) 
    {
        return res.status(500).send(e)
    }
});

app.get('/api/products', async (req, res) =>{
    try{
        const products = await Product.find();
        return res.status(200).send(products);
    }catch (e) {
        return res.status(500).send(e)
    }
})

app.get('/api/products/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const products = await Product.findById(_id);
        return res.status(200).send(products);
    }catch (e) {
        return res.status(500).send(e)
    }
})

app.patch('/api/products/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const products = await Product.findByIdAndUpdate(_id, req.body);
        if(product) {
            const productUp = await Product.findById(_id);
            return res.status(200).send(productUp)
        }
        else{
            return res.status(400).send("update failed")
        }
    }catch (e) {
        return res.status(500).send(e)
    }
})

app.delete('/api/products/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const product = await Product.findByIdAndDelete(_id);
        if(product) {
            return res.status(400).send("Product successfully deleted")
        }
        return res.send("product deletion failed");
    }catch (e) {
        return res.status(500).send(e)
    }
})

app.listen(3000, () => {console.log("Lisenting on Port 3000")})