import React, { useEffect, useState } from 'react';
import style from './App2.module.css';
import { useParams } from 'react-router-dom';
import menuData from '../menu.json';

interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    details: string;
    ingredients: string[];
    reviews: { [name: string]: string }[];
}

function PizzaDetails() {
    const { pizzaId } = useParams<{ pizzaId?: string }>();
    const parsedPizzaId = pizzaId ? parseInt(pizzaId, 10) : null;
    const [pizza, setPizza] = useState<Pizza | null>(null);

    useEffect(() => {
        if (parsedPizzaId !== null) {
            const foundPizza = menuData.find((item) => item.id === parsedPizzaId);
            if (foundPizza) {
                setPizza(foundPizza);
            }
        }
    }, [parsedPizzaId]);

    if (!pizza) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.menu2}>
            <div className={style.menuitem}>
                <div className={style.menu_description2}>
                    <h1 className={style.h1}>{pizza.name}</h1>
                    <div className={style.items}>
                        <img className={style.catimg2} src={pizza.images[0]} alt={pizza.name} />
                        <p className={style.op}>{pizza.description}</p>
                        <button className={`btn btn-primary ${style.addToCartButton}`}>
                            в корзину
                        </button>
                    </div>
                    <h2 className={style.text}>Ингридиенты:</h2>
                    <p className={style.op}>{pizza.ingredients.join(', ')}</p>
                    <h2 className={style.text}>Описание:</h2>
                    <p className={style.op}>{pizza.details}</p>
                    <h2 className={style.text}>Цена: ${pizza.price}</h2>
                    <div className={style.divreviews}>
                        <h2 className={style.h1}>Отзывы:</h2>

                        <ul className={style.list_reviews}>
                            {pizza.reviews.map((review, index) => (
                                <li className={style.reviews_item} key={index}>
                                    <img className={style.catimg3} src={Object.values(review)[0]} alt="Review Image" />
                                    {Object.values(review)[1]}: {Object.values(review)[2]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaDetails;