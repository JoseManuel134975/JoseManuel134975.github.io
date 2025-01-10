import styles from './Ejercicio2.module.css';


export default function Ejercicio2() {
    return(
        <>
            <body>
                <main className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.h1}>404ERRORS</h1>
                        <nav className={styles.nav}>
                            <a className={styles.a} href="#">Home</a>
                            <a href="#">Products</a>
                            <a href="#">About Us</a>
                            <a href="#">Pricing</a>
                            <a href="#">Contact Us</a>
                        </nav>

                        <div className={styles.signBtns}>
                            <a className={styles.signBtns__btnIn} href="#">Sign in</a>
                            <a className={styles.signBtns__btnUp} href="#">SignUp</a>
                        </div>
                    </header>
                </main>
            </body>
        </>
    )
}