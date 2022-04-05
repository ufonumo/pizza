import React, { useState } from 'react'
import styles from '../../styles/Admin.module.css'
import Image from 'next/image'
import axios from 'axios'

const Admin = ({order, productList}) => {
    const [pizzaList, setPizzaList] = useState(productList)
    const [orderList, setOrderList] = useState(order)

    const handleDelete = async (id) => {
        console.log(id);
        try{
            const res =  await axios.delete(`http://localhost:3000/api/products/${id}`)
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
            console.log(res);
        }
        catch{
            console.log(error);
        }
    }

    const handleStatus = async (id) =>{
        const item = order.filter(order => order._id === id)[0]
        const currentStatus =  item.status
        try{
            const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {status: currentStatus + 1 })
            setOrderList(orderList.filter(order => order._id !== id))
            setOrderList([
                res.data,
                ...orderList.filter((order) => order._id !== id)
            ])
            console.log(res);
        }
        catch{
            console.log(error);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.time}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </tbody>
                
                {
                    pizzaList.map((product) => (
                    <tbody key={product?._id}> 
                        <tr className={styles.trTitle}>
                            <td>
                                <Image
                                    src={product?.img}
                                    width={50}
                                    height={50}
                                    objectFit='cover'
                                />
                            </td>
                            <td>{product?._id.slice(0, 5)}...</td>
                            <td>{product?.title}</td>
                            <td>${product?.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button} 
                                onClick={() => handleDelete(product?._id)}
                                >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    ))
                }
            </table>
        </div>

        <div className={styles.time}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Order id</th>
              <th>Customer </th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
         
          <tbody>
            <tr className={styles.trTitle}>
              <td>
                48852525435rt
              </td>
              <td>Ruth joe</td>
              <td>$ 100</td>
              <td>Paid</td>
              <td>Preparing</td>
              <td>
                  <button className={styles.button}>Next stage</button>
              </td>
            </tr>
          </tbody>
          
        </table>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const productList = await axios.get('http://localhost:3000/api/products')
    const orderList = await axios.get('http://localhost:3000/api/orders')

    return{
        props:{
            productList:productList.data,
            order:orderList.data
        }
    }
}
export default Admin