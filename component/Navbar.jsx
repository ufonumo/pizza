import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  const quantity =  useSelector(state => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png'  alt='phone' width={30} height={30} />
        </div>
        <div className={styles.texts}>
          <p className={styles.text}>Order now</p>
        </div>
      </div>
      <div className={styles.item}> 
        <ul className={styles.list}>
          <Link href='/'>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href='/product'>
            <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image src='https://img.icons8.com/dotty/50/ffffff/pizza.png' width={50} height={50}/>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contacts</li>
        </ul>
      </div>
      <Link href='/cart'>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='https://img.icons8.com/external-icongeek26-outline-icongeek26/44/ffffff/external-cart-essentials-icongeek26-outline-icongeek26.png' width={44} height={44} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default Navbar