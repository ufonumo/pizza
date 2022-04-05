import Order from "../../../models/Order";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
   const {method, query: {id}} = req;

  await dbConnect()

   if (method === 'GET'){
     try {
         const order = await Order.findBy(id);
         res.status(200).json(order);
     } catch (error) {
        res.status(500).json({
            message: error.message,
        });
     }
   }
   if (method === 'PUT'){
    try{
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err){
        res.status(500).json({message: err.message})
    }
   }
   if (method === 'DELETE'){
    try{
         await Product.findByIdAndDelete(id);
        res.status(201).json('The product has been deleted');
    } catch (err){
        res.status(500).json({message: err.message})
    }
   }
}