import Header from './Header'
import styles from './Main.module.css'
import Section from './Section.jsx'

export default function Main(){
    return(
        <>
            <main className={ styles.main }>
                <Header></Header>
                <Section></Section>
            </main>
        </>
    )
}