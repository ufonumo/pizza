import React, {useState} from 'react'
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
    const [size, setSize] = useState(0)
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout='fill' objectFit='contain' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>

            <p className={styles.choose}>Choose the size</p>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0) }>
                    <Image src='/img/size.png' layout='fill' />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1) }>
                    <Image src='/img/size.png' layout='fill' />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2) }>
                    <Image src='/img/size.png' layout='fill' />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product