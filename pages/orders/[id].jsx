import React from 'react'
import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {
    const status = 0
    const statusClass = (index) => {
        if(index - status < 1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>
                            Order ID
                        </th>
                        <th className={styles.th}>
                            Customer
                        </th>
                        <th className={styles.th}>
                            Address
                        </th>
                        <th className={styles.th}>
                            Total
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <span className={styles.id}>
                                185257
                            </span>
                        </td>
                        <td>
                            <span className={styles.name}>
                               John Smith
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>
                                123 Main St, New York, NY 10001
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                $50.12
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}>
                <div className={styles.status}>
                    <Image src='/img/paid.png'  width={30} height={30}/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/img/checked.png'  width={20} height={20} className={styles.checkedIcon}/>
                    </div>
                </div>

                <div className={statusClass(0)}>
                    <Image src='/img/bake.png'  width={30} height={30}/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/img/checked.png'  width={20} height={20} className={styles.checkedIcon}/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src='/img/bike.png'  width={30} height={30}/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/img/checked.png'  width={20} height={20} className={styles.checkedIcon}/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src='/img/delivered.png'  width={30} height={30}/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/img/checked.png'  width={20} height={20} className={styles.checkedIcon}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>
                        Subtotal: 
                    </b>
                    $50.12
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>
                        Discount: 
                    </b>10%
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>
                        Total: 
                    </b> $50.12
                </div>
                <button className={styles.button} disabled>Paid</button>
            </div>
        </div>
    </div>
  )
}

export default Order