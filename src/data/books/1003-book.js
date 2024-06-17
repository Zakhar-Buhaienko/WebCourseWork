import React from 'react';
import './BookText.css';  // Додаємо файл зі стилями

const text = "The Adventures of Sherlock Holmes is a collection of short stories by British writer Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective Sherlock Holmes, which had been published in twelve monthly issues of The Strand Magazine from July 1891 to June 1892. The stories are collected in the same sequence, which is not supported by any fictional chronology. The only characters common to all twelve are Holmes and Dr. Watson, and all are related in first-person narrative from Watson's point of view.";

const BookText3 = () => {
    return (
        <div className="p-4 bg-light rounded">
            <h4 className="font-weight-bold font-italic">'The Adventures of Sherlock Holmes' by Arthur Conan Doyle</h4>
            <p>{text}</p>
        </div>
    );
};

export default BookText3;
