import styles from './ReadingList.module.css'

export default function ReadingList({ title }){
    return(
        <>
            <article className={ styles.article }>
                <h3>{ title }</h3>
            </article>

            <b>Books read: <i id='readBooks'></i> of <i id='numBooks'></i></b>
        </>
    )
}