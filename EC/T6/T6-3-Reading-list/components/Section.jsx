import Form from './Form.jsx'
import ReadingList from './ReadingList.jsx'
import styles from './Section.module.css'

export default function Section(){
    return(
        <>
            <section className={ styles.section }>
                <Form title="Book"></Form>
                <ReadingList title="My Reading List"></ReadingList>
            </section>
        </>
    )
}