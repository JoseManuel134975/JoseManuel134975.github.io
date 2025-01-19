import styles from "./Ejercicio6.module.css";

export default function Ejercicio6() {
  return (
    <>
      <body>
        <main className={styles.container}>
          <section className={styles.heading}>
            <article className={styles.empty}></article>
            <article className={styles.heading__presentation}>
              <h4>Author name</h4>
              <h1>The best way to wireframe a website</h1>
              <p>Read more</p>
            </article>
          </section>

          <section className={styles.main}>
            <article>
              <b>Keys to writing copy that actually converts and sells users</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, recusandae laudantium sequi quos molestias impedit!
                Magnam quos qui ratione mollitia, porro accusantium nostrum a
                atque ex aperiam debitis maiores at.
              </p>
              <h4>Read more</h4>
            </article>
            <article>
            <b>Keys to writing copy that actually converts and sells users</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, recusandae laudantium sequi quos molestias impedit!
                Magnam quos qui ratione mollitia, porro accusantium nostrum a
                atque ex aperiam debitis maiores at.
              </p>
              <h4>Read more</h4>
            </article>
          </section>
        </main>
      </body>
    </>
  );
}
