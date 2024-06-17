import React, { useEffect, useState } from 'react';
import { Nav } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import ShopCard from "../../components/shop-card-component/ShopCard";
import { LOCAL_STORE_TOTALITEMS } from "../../models/constants";
import { LOCAL_STORE_COUNTERS } from "../../models/constants";


const GoodsComponents = (props) => {

    const setItemCounter = () => {
        window.localStorage.setItem(LOCAL_STORE_COUNTERS, JSON.stringify(props.itemCounter)); 
        console.log(props.itemCounter);
    };
    const isItemCounterEmpty = () => {
        const storedData = localStorage.getItem(LOCAL_STORE_COUNTERS, 0);
        if (!storedData) {
            console.log('Local storage is empty')
            setItemCounter();
        }
    }
    
    const [totalItems, setTotalItems] = useState([]);
    const totalPriceClick = (item) => {
        console.log("totalPriceClick", props.itemsList);

        setTotalItems([...totalItems, item]);
    }

    //
    //const LOCAL_STORE_TOTALITEMS = "LOCAL_STORE_TOTALITEMS";
    const [itemsToSell, setItemsToSell] = useState(props.itemsList);
    //const [totalItems, setTotalItems] = useState([]);
    const getLocalStore = () => {
        if (totalItems && totalItems.length > 0) {
            return;
        }
        let cardsLocal = window.localStorage.getItem(LOCAL_STORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        if (cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            setTotalItems([...cardsLocal]);
        }
    };
    getLocalStore();
    const addItem = (cardItem) => {
        setTotalItems([...totalItems, cardItem]);

    };
    const getTotalCounter = () => {
        let totalCounter = 0;
        const itemsCounterTemp = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
        props.itemsList.map(item => {
            totalCounter += itemsCounterTemp[item.id - 1];
            return 0;
        });
        return totalCounter;
    };
    const getTotalSum = () => {
        let totalSum = 0;
        const itemsCounterTemp = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];

        props.itemsList.map(item => {
            totalSum += item.price * itemsCounterTemp[item.id - 1];
            return 0;
        });
        
        return totalSum;
    }
    const bottomButton = () => {
        const totalCounter = getTotalCounter();
        if (totalCounter > 1)
            return (
                <h3>Buy {totalCounter} Books for {getTotalSum()}
                    UAH</h3>
            );
        else return (
            <h3>Buy {totalCounter} Book for {getTotalSum()}
                UAH</h3>
        );;
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };
    const bottomButtonSetter = () => {
        if (getTotalCounter() === 0)
            return (
                <Button variant="outline-dark" onClick={scrollToTop}><h3>Get your Books</h3></Button>
            );
        else return (
            <Nav.Link href="/basket" className="btn btn-dark btn-lg" style={{ color: 'white', textDecoration: 'none', border: '1px solid transparent', padding: '10px', transition: 'border-color 0.3s ease', borderRadius: '10px' }}
                onMouseEnter={(e) => e.target.style.borderColor = '#ffffff'}
                onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                {bottomButton()}
            </Nav.Link>
        );
    }
    const removeItem = (cardItem) => {
        let storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
        const idItem = parseInt(cardItem.id);
        if (storedDataCounters[idItem - 1] > 0) {
            let foundItemIndex;
            totalItems.forEach((item, index) => {
                if (item.id === cardItem.id) {
                    foundItemIndex = index;
                }
            });
            totalItems.splice(foundItemIndex, 1);
            setTotalItems([...totalItems]);
            window.localStorage.setItem(LOCAL_STORE_TOTALITEMS, JSON.stringify(totalItems));
        }
    };
    const setSortTotalItems = (cards) => {
        setItemsToSell(cards);
    };
    //

    useEffect(() => {
        getLocalStore();
    });

    
    isItemCounterEmpty();

    return (
        <main>
            <header className="bg-secondary text-white py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-white p-4" style={{ borderRadius: '8px' }}>
                                <h3 className="text-center">All our Books:</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className="container">
                <div className="row">
                    {props.itemsList.map(item => {
                        return (
                            <ShopCard card={item} key={item.id} getItem={totalPriceClick} addItem={addItem}
                                removeItem={removeItem} />
                        );
                    })}
                </div>
            </section>
            {!isItemCounterEmpty() && (
                <section className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            {bottomButtonSetter()}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};
export default GoodsComponents;