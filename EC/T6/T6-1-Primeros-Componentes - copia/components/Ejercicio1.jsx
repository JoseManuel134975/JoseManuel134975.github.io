import styles from './Ejercicio1.module.css';

export default function Ejercicio1() {
    return(
        <>
            <body className={styles.body}>
                <main className={styles.container}>
                    <form className={styles.formContainer}>
                        <input className={styles.username} type="text" placeholder="username"></input>
                
                        <ul className={styles.ul}>
                            <li className={styles.li}>1 lowercase character</li>
                            <li className={styles.li}>1 uppercase character</li>
                            <li className={styles.li}>6 minimum characters</li>
                        </ul>
                
                        <input className={styles.submit} type="submit" value="Submit"></input>
                    </form>
                </main>
            </body>
        </>
    )
}