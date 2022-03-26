import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
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
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='https://img.icons8.com/dotty/50/ffffff/pizza.png' width={50} height={50}/>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contacts</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='https://img.icons8.com/external-icongeek26-outline-icongeek26/44/ffffff/external-cart-essentials-icongeek26-outline-icongeek26.png' width={44} height={44} />
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar