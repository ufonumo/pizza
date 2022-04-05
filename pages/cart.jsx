import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Cart = () => {
  const dispatch = useDispatch()
  console.log(dispatch);
  const cart = useSelector(state => state.cart)
  console.log(process.env.FLUTTERWAVE_TOKEN)
  
  const config = {
    public_key: 'FLWPUBK-123a8089f06225a39df4b7f35d137bd9-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
         
          {
            cart.products.map((product) => (
              <tbody>
                <tr className={styles.tr} key={product._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={product.img}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{product?.title}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {product.extras.map((extra) => (
                        <span key={extra._id}>{extra.text}</span>
                      ))}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>${product?.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{product?.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>${product?.price * product?.quantity}</span>
                  </td>
                </tr>
              </tbody>
            
            ))
          }
          
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart?.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart?.total}
          </div>
          <button className={styles.button} 
            onClick={() => {
              console.log('click');
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                   // closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;