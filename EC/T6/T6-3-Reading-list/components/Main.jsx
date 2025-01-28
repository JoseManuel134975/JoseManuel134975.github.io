import styles from "./Main.module.css";
import { bookList as books } from "./BookList.jsx";
import { useState } from "react";
import { Book } from "./Book.jsx";

export default function Main() {
  const [bookList, setBookList] = useState(books.allBooks);
  let title = "",
    author = "",
    genre = "";

  function handleSubmit(event) {
    event.preventDefault();

    const noFormatDate = Date.now();
    const currentDate = new Date(noFormatDate);
    setBookList([
      ...bookList,
      new Book(title, genre, author, false, currentDate.toDateString()),
    ]);
  }

  function handleDelete(event) {
    bookList.splice(event.target.key, 1);
    setBookList([...bookList]);
    books.readBooks++;
  }

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <h2>IMG</h2>
          <h1>The Reading List</h1>
        </header>

        <section className={styles.section}>
          <form action="" className={styles.form}>
            <h3>Book</h3>
            <fieldset className={styles.title}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                onChange={(e) => (title = e.target.value)}
              />
            </fieldset>

            <fieldset className={styles.authorGenre}>
              <div className={styles.authorGenre__author}>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  onChange={(e) => (author = e.target.value)}
                />
              </div>

              <div className={styles.authorGenre__genre}>
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  id="genre"
                  onChange={(e) => (genre = e.target.value)}
                />
              </div>
            </fieldset>

            <input
              type="submit"
              value="Add book"
              id={styles.submit}
              onClick={handleSubmit}
            />
          </form>

          <hr />

          <article className={styles.article}>
            <h2>Reading List</h2>
            {bookList.length > 0 &&
              bookList.map((item, index) => (
                <div key={index} className={styles.book} onClick={handleDelete}>
                  <div className={styles.titleAuthor}>
                    <h3>{item.title}</h3>
                    <h4>{item.author}</h4>
                  </div>
                  <div className={styles.readDate}>
                    <p>{item.readDate}</p>
                  </div>
                </div>
              ))}
          </article>

          <b>
            Read books: <i id="readBooks">{books.readBooks}</i> of{" "}
            <i id="allBooks">{bookList.length}</i>
          </b>
        </section>
      </main>
    </>
  );
}
