import React from 'react';
import './App.css';
import Menu from "./components/menu-component/Menu";
import { Routes, Route } from "react-router-dom";
import BasketComponent from "./pages/basket-component/basket-component";
import ContactComponent from "./pages/contact-component/contact-component";
import GoodsComponents from "./pages/goods-component/goods-components";

function App() {
    const itemsList = [
        { id: 1, title: "Contol Your Mind", price: 790, imgurl: "/imgs/books/1001-book.jpg" },
        { id: 2, title: "The New Mist Fury", price: 320, imgurl: "/imgs/books/1002-book.jpg" },
        { id: 3, title: "Sherlock Holmes", price: 180, imgurl: "/imgs/books/1003-book.jpg" },
        { id: 4, title: "Game Of Thrones", price: 108, imgurl: "/imgs/books/1004-book.jpg" },
        { id: 5, title: "Story of Elon Musk", price: 410, imgurl: "/imgs/books/1005-book.jpg" },
        { id: 6, title: "Intelligent Investor", price: 270, imgurl: "/imgs/books/1006-book.jpg" },
        { id: 7, title: "Masters of the dew", price: 110, imgurl: "/imgs/books/1007-book.jpg" },
    ];
    const itemCounter = [0, 0, 0, 0, 0, 0, 0];

    return (
        <section className="app">
            <header>
                <Menu />
            </header>
            <Routes>
                <Route path="/basket" element={<BasketComponent itemsList={itemsList} itemCounter={itemCounter} itemTitle={itemsList.title} />} />
                <Route path="/about" element={<ContactComponent />} />
                <Route exact path="/" element={<GoodsComponents itemsList={itemsList} itemCounter={itemCounter} />} />
            </Routes>
        </section>
    );
}

export default App;
