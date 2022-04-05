import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin Dashboard</h1>
            <input
            placeholder="username"
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            placeholder="password"
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} className={styles.button}>
            Sign In
            </button>
            {error && <span className={styles.error}>Wrong Credentials!</span>}
        </div>
    </div>
  )
}

export default Login