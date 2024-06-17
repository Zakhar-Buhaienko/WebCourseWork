import React from 'react';
import './BookText.css';  // Додаємо файл зі стилями

const text = "The second part of the bundle called 'Master Your Emotions' will teach you: \nWhat our emotions actually are and what core emotions are responsible for everything we feel.\nThe importance of discovering your emotional map and how you can use it to improve your sate of being.\nWhen and if you should control your emotions or just be in the moment with them.\nThe dangers we face if we leave our emotions unchecked.\nAn easy to follow book structure where we take one emotion at a time.Clear step by step guidelines and scenarios which you can relate to and allow you to understand each emotion that much better.\nA bonus chapter which will cover the emotion most people tend to overlook.\nThe journey to self - improvement must begin with self - acknowledgment.If you have the courage to start this journey and take control of your inner self, then scroll up and Order Now!";

const BookText1 = () => {
    return (
        <div className="p-4 bg-light rounded">
            <ul className="list-unstyled">
                <li className="mb-2"><span>What our emotions actually are and what <span className="font-weight-bold">core emotions are responsible for everything we feel.</span></span></li>
                <li className="mb-2"><span>The <span className="font-weight-bold">importance of discovering your emotional map</span> and how you can use it to improve your state of being.</span></li>
                <li className="mb-2"><span><span className="font-weight-bold">When</span> and <span className="font-weight-bold">if</span> you should control your emotions or just be in the moment with them.</span></li>
                <li className="mb-2"><span>The <span className="font-weight-bold">dangers</span> we face <span className="font-weight-bold">if we leave our emotions unchecked.</span></span></li>
                <li className="mb-2"><span>An easy to follow book structure where we take one emotion at a time.</span></li>
                <li className="mb-2"><span><span className="font-weight-bold">Clear step by step guidelines</span> and scenarios which you can relate to and allow you to understand each emotion that much better.</span></li>
                <li className="mb-2"><span>A <span className="font-weight-bold"><u>bonus chapter</u></span> which will cover the emotion most people tend to overlook.</span></li>
            </ul>
        </div>
    );
};

export default BookText1;
