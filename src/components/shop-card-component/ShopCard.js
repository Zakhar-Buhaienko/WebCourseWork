import React from 'react';

import { Card, Button } from "react-bootstrap";
import { LOCAL_STORE_TOTALITEMS } from "../../models/constants";
import { LOCAL_STORE_COUNTERS } from "../../models/constants";

const ShopCard = (props) => {
    let storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
    const idItem = parseInt(props.card.id);

    const addItem = () => {
        const storedDataItems = JSON.parse(window.localStorage.getItem(LOCAL_STORE_TOTALITEMS)) || [];

        if (storedDataCounters[idItem - 1] === null)
            storedDataCounters[idItem - 1] = 0;
        storedDataItems.push(props.card);
        storedDataCounters[idItem - 1] += 1;

        window.localStorage.setItem(LOCAL_STORE_TOTALITEMS, JSON.stringify(storedDataItems));
        window.localStorage.setItem(LOCAL_STORE_COUNTERS, JSON.stringify(storedDataCounters));

        props.addItem(props.card);
    }

    const removeItem = () => {
        props.removeItem(props.card);

        let storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
        const idItem = parseInt(props.card.id);
        if (storedDataCounters[idItem - 1] === null)
            return 0;
        if (storedDataCounters[idItem - 1] !== 0) {
            storedDataCounters[idItem - 1] -= 1;
            window.localStorage.setItem(LOCAL_STORE_COUNTERS, JSON.stringify(storedDataCounters));
        }
    }

    return (
        <div className="mt-3 col-12 col-sm-6 col-md-4 col-xl-3" >
            <Card>
                <Card.Img variant="top" src={props.card.imgurl} />
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    <Card.Text>{props.card.price} UAH</Card.Text>
                </Card.Body>

                 <Card.Footer>
                    <Button variant="outline-dark" onClick={addItem}>Add</Button>
                    <Button variant="outline-dark" onClick={removeItem}>-</Button>
                    <span> Selected  {storedDataCounters[idItem - 1]}</span>
                    
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ShopCard;