import styles from './Header.module.css'

export default function Header(){
    return(
        <>
            <header className={ styles.header }>
                <h2>IMG</h2>
                <h1>The Reading List</h1>
            </header>
        </>
    )
}