import Header from './Header'
import styles from './Body.module.css'

export default function Body(){
    return(
        <>
            <body className={ styles.body }>
                <Header></Header>
            </body>
        </>
    )
}