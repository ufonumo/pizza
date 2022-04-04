import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
   const {method, query:{id} } = req;

   dbConnect()

   if (method === 'GET'){
     try {
         const product = await Product.findById(id);
         res.status(200).json(product);
     } catch (error) {
        res.status(500).json({
            message: error.message,
        });
     }
   }
   if (method === 'PUT'){
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err){
        res.status(500).json({message: err.message})
    }
   if (method === 'DELETE'){
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err){
        res.status(500).json({message: err.message})
    }
   }
}}