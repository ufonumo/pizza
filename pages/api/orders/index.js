import Order from "../../../models/Order";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
   const {method, query: {id}} = req;

  await dbConnect()

   if (method === 'GET'){
     try {
         const orders = await Order.find();
         res.status(200).json(orders);
     } catch (error) {
        res.status(500).json({
            message: error.message,
        });
     }
   }
   if (method === 'POST'){
    try{
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err){
        res.status(500).json({message: err.message})
    }
   }
}