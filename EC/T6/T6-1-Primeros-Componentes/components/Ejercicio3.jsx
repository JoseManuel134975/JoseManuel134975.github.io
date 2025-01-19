import styles from './Ejercicio3.module.css'


export default function Ejercicio3(){
    return(
        <>
            <body>
                <main className={styles.container}>
                    <article className={styles.card}>
                        <div className={styles.circleColor}></div>
                        <h3>Title</h3>
                        <h4>Subtitle</h4>
                        <p>Feature 1</p>
                        <p>Feature 2</p>
                        <p>Feature 3</p>
                        <a href="#">Start now</a>
                    </article>
                </main>
            </body>
        </>
    )
}