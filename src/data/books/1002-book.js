import React from 'react';
import './BookText.css';  // ������ ���� � �������

const text = "The seductive and stunning #1 New York Times bestselling sequel to Sarah J. Maas's spellbinding A Court of Thorns and Roses. Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people. As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different roles: one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future and the future of a world in turmoil. Bestselling author Sarah J. Maas's masterful storytelling brings this second book in her dazzling, sexy, action-packed series to new heights.";

const BookText2 = () => {
    return (
        <div className="p-4 bg-light rounded">
            <h4 className="font-weight-bold font-italic">'A Court of Mist and Fury' by Sarah J. Maas</h4>
            <p>{text}</p>
        </div>
    );
};

export default BookText2;
