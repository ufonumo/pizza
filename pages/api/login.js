import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";
import cookie from 'cookie'
export default async function handler(req, res) {
   const {method, query:{id} } = req;

   dbConnect()

   if (method === 'POST'){
     try {
         const {username, password} = req.body;
        if(username === process.env.USERNAME && process.env.password === PASSWORD){
            res.setHeaders('Set-Cookie', cookie.serialize('token', process.env.TOKEN,{
                maxAge: 60 * 60,
                path: '/',	
                sameSite: 'strict',
            })) 
            res.status(200).json('You are logged in');
        } else {
            res.status(401).json('Oops!!, invalid login credentials ');
        }

     } catch (error) {
        res.status(500).json({
            message: error.message,
        });
     }
   }
   if (method === 'PUT'){
    try{
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json(product);
    } catch (err){
        res.status(500).json({message: err.message})
    }

    if (method === 'DELETE'){
        try{
             await Product.findByIdAndDelete(id);
            res.status(201).json('The product has been deleted');
        } catch (err){
            res.status(500).json({message: err.message})
        }
    }
}}