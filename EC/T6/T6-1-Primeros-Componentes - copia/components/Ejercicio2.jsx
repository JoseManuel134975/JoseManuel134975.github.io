import styles from './Ejercicio2.module.css';


export default function Ejercicio2() {
    return(
        <>
            <body>
                <main className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.h1}>404ERRORS</h1>
                        <nav className={styles.nav}>
                            <a href="#">Home</a>
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

                    <section className={styles.mainSection}>
                        <article className={styles.mainSectionContent}>
                            <h2>Oops!</h2>
                            <h2>Page not found</h2>
                            <p>Sorry about that! Please visit our homepage to get where you need to go.</p>
                            <a href="#">Back to homepage</a>
                        </article>
                        <article className={styles.mainSectionImg}>
                            <img src="../src/assets/error-404.png" alt="Error 404" />
                        </article>
                    </section>
                </main>
            </body>
        </>
    )
}