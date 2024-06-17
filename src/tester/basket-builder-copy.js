import React, { useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { LOCAL_STORE_TOTALITEMS, LOCAL_STORE_COUNTERS } from '../../models/constants';
import BookText1 from '../../data/books/1001-book';
import BookText2 from '../../data/books/1002-book';
import BookText3 from '../../data/books/1003-book';

const BasketBuilder = (props) => {
    let storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
    const idItem = parseInt(props.card.id);
    const [totalItems, setTotalItems] = useState([]);

    const bookTextComponents = [
        <BookText1 />,
        <BookText2 />,
        <BookText3 />,
    ];

    const addItem = () => {
        const storedDataItems = JSON.parse(window.localStorage.getItem(LOCAL_STORE_TOTALITEMS)) || [];

        storedDataItems.push(props.card);
        storedDataCounters[idItem - 1] += 1;

        window.localStorage.setItem(LOCAL_STORE_TOTALITEMS, JSON.stringify(storedDataItems));
        window.localStorage.setItem(LOCAL_STORE_COUNTERS, JSON.stringify(storedDataCounters));
        setTotalItems([...totalItems, props.card]);

    }
    const removeItem = () => {
        let storedDataCounters = JSON.parse(window.localStorage.getItem(LOCAL_STORE_COUNTERS)) || [];
        const idItem = parseInt(props.card.id);
        if (storedDataCounters[idItem - 1] > 0) {
            let foundItemIndex;
            totalItems.forEach((item, index) => {
                if (item.id === props.card.id) {
                    foundItemIndex = index;
                }
            });
            totalItems.splice(foundItemIndex, 1);
            setTotalItems([...totalItems]);
            storedDataCounters[idItem - 1] -= 1;
            window.localStorage.setItem(LOCAL_STORE_COUNTERS, JSON.stringify(storedDataCounters));
            window.localStorage.setItem(LOCAL_STORE_TOTALITEMS, JSON.stringify(totalItems));

        }
    }
    if (storedDataCounters[idItem - 1] === 0) {
        console.log("lol");
        return null;
    }
    return (
        <div className="col-12 my-3">
            <Card className="h-100 text-dark bg-light">
                <Row noGutters>
                    <Col md={4}>
                        <Card.Img variant="top" src={props.card.imgurl} className="img-fluid" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{props.card.title}</Card.Title>
                            <Card.Text>{props.card.price} UAH</Card.Text>
                            {bookTextComponents[idItem - 1]}
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-dark" onClick={addItem}>Add</Button>
                    <Button variant="outline-dark" onClick={removeItem}>Remove</Button>
                    <span>Selected {storedDataCounters[idItem - 1]}</span>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default BasketBuilder;
