import styles from './Ejercicio4.module.css'


export default function Ejercicio4(){
    return(
        <>
            <body>
                <main className={styles.container}>
                    <p>Try the product out for free</p>
                    <form action="">
                        <input className={styles.email} type="email" placeholder='email'/>
                        <input className={styles.password} type="password" placeholder='password'/>
                        <input className={styles.submit} type="submit" value="Start free trial" />
                    </form>
                </main>
            </body>
        </>
    )
}