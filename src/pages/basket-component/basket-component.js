import React, { useState, useEffect } from 'react';
import { Nav, Carousel } from "react-bootstrap";
import BasketBuilder from "./basket-builder";
import { LOCAL_STORE_COUNTERS } from "../../models/constants";

const BasketComponent = (props) => {
    const storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
    const [hasItemsInBasket, setHasItemsInBasket] = useState(false);

    const plusHeader = () => {
        let totalCounter = 0;
        const itemsCounterTemp = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
        props.itemsList.map(item => {
            totalCounter += itemsCounterTemp[item.id - 1];
            return 0;
        });
        if (totalCounter === 0)
            return (
                <div className="container-fluid">
                    <div className="container mt-4">
                        <Carousel style={{ minHeight: '45vh' }}>
                            {props.itemsList.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={`../../${item.imgurl}`}
                                        alt={`Slide ${index + 1}`}
                                        style={{ maxHeight: '80vh', objectFit: 'fill' }}
                                    />
                                    <Carousel.Caption>
                                        <h3 style={{ color: '#333', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>{index + 1}# {item.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>


                    <div className="d-flex justify-content-center align-items-center mt-4" style={{ minHeight: '10vh' }}>
                        <Nav.Link href="/" className="btn btn-dark btn-lg" style={{ color: 'white', textDecoration: 'none', border: '1px solid transparent', padding: '10px', transition: 'border-color 0.3s ease', borderRadius: '10px' }}
                            onMouseEnter={(e) => e.target.style.borderColor = '#ffffff'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                            Get Your Books Right NOW!
                        </Nav.Link>
                    </div>
                </div>
            );
        else if (totalCounter > 0) return (
            <header className="bg-secondary text-white py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-white p-4" style={{ borderRadius: '8px' }}>
                                <h3 className="text-center">Your Selected Books:</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };

    // Функція для перевірки, чи є товари у корзині
    const checkBasketItems = () => {
        const hasItems = props.itemsList.some(item => storedDataCounters[item.id - 1] > 0);
        setHasItemsInBasket(hasItems);
    };

    // Відслідковування змін у localStorage
    useEffect(() => {
        window.addEventListener('storage', checkBasketItems);

        // Перевіряємо стан під час першого завантаження компонента
        checkBasketItems();

        return () => {
            window.removeEventListener('storage', checkBasketItems);
        };
    }, []);

    return (
        <main >
            {plusHeader()}
            <div className="container-fluid">
                <section className="container">
                    <div className="row">
                        {props.itemsList.map(item => {
                            if (storedDataCounters[item.id - 1] > 0) {
                                return <BasketBuilder key={item.id} card={item} cardCounter={item.id} checkBasketItems={checkBasketItems} />;
                            } else return null;
                        })}
                    </div>
                </section>
                {/* Відображаємо кнопку тільки якщо є товари у корзині */}
                {hasItemsInBasket && (
                    <div className="row justify-content-end mt-4">
                        <div className="col-auto">
                            <button className="btn btn-dark btn-lg btn-block">Confirm Order</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default BasketComponent;
