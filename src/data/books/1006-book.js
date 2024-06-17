import React from 'react';
import './BookText.css';  // ������ ���� � �������

const text = "This classic text is annotated to update Graham's timeless wisdom for today's market conditions... The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949. Over the years, market developments have proven the wisdom of Graham's strategies. While preserving the integrity of Graham's original text, this revised edition includes updated commentary by noted financial journalist Jason Zweig, whose perspective incorporates the realities of today's market, draws parallels between Graham's examples and today's financial headlines, and gives readers a more thorough understanding of how to apply Graham's principles. Vital and indispensable, this HarperBusiness Essentials edition of The Intelligent Investor is the most important book you will ever read on how to reach your financial goals.";

const BookText6 = () => {
    return (
        <div className="p-4 bg-light rounded">
            <h4 className="font-weight-bold font-italic">'The Intelligent Investor' by Benjamin Graham</h4>
            <p>{text}</p>
        </div>
    );
};

export default BookText6;
