import styles from './Grid.module.css';
import Card from './Card.jsx';
import Productos from '../data/productos.json';
import { useState, useEffect } from 'react';
import Filtrar from './Filtrar.jsx';



export default function Grid() {
    const [json, setProducts] = useState([]);

    useEffect(() => {
        fetch('../data/productos.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <section className={styles.grid}>
            <Filtrar></Filtrar>
            {Productos.map((item) => (
                <Card key={item.id} obj={item}></Card>
            ))}
        </section>
    );
}