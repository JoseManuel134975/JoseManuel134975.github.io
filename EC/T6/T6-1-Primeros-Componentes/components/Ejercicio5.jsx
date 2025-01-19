import styles from './Ejercicio5.module.css'


export default function Ejercicio5(){
    return(
        <>
            <body>
                <main className={styles.container}>
                    <header className={styles.header}>
                        <h1>TRADE</h1>
                        <nav className={styles.nav}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                        </nav>
                        <a href="#">Sign Up</a>
                    </header>
                </main>
            </body>
        </>
    )
}