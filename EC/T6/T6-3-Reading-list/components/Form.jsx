import styles from './Form.module.css'
// import { book } from './Book.js'
// import { bookList as books } from './BookList.js'
import { useEffect, useState } from 'react'

export default function Form({ title }){
    const [ books, setBooks ] = useState([])

    function handleSubmit(e, t, a, g){
        e.preventDefault()

        console.log(t);



    }

    return(
        <>
            <form action="" className={ styles.form }>
            <h3>{ title }</h3>
                <fieldset className={ styles.title }>
                    <label htmlFor="">Title</label>
                    <input type="text" id='title'/>
                </fieldset>

                <fieldset className={ styles.authorGenre }>
                    <div className={ styles.authorGenre__author }>
                        <label htmlFor="">Author</label>
                        <input type="text" id='author'/>
                    </div>

                    <div className={ styles.authorGenre__genre }>
                        <label htmlFor="">Genre</label>
                        <input type="text" id='genre'/>
                    </div>
                </fieldset>

                <input type="submit" value="Add book" id={ styles.submit } onClick={ handleSubmit }/>
            </form>

            <hr />
        </>
    )
}