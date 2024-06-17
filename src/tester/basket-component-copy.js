import React from 'react';
import BasketBuilder from "./basket-builder";
import { LOCAL_STORE_COUNTERS } from "../../models/constants";

const BasketComponent = (props) => {
    const storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className="text-dark">List of selected products</h2>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    {props.itemsList.map(item => {
                        if (storedDataCounters[item.id - 1] > 0) {
                            return <BasketBuilder key={item.id} card={item} cardCounter={item.id} />;
                        } else return null;
                    })}
                </div>
            </section>
        </div>
    );
};

export default BasketComponent;
