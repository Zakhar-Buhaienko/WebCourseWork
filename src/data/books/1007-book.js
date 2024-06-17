import React from 'react';
import './BookText.css';  // Додаємо файл зі стилями

const text = "This outstanding Haitian novel tells of Manuel's struggle to keep his little community from starvation during drought. The genre of the peasant novel in Haiti reaches back to the nineteenth century and this is one of the outstanding examples. Manuel returns to his native village after working on a sugar plantation in Cuba only to discover that it is stricken by a drought and divided by a family feud. He attacks the resignation endemic among his people by preaching the kind of political awareness and solidarity he has learned in Cuba. He goes on to illustrate his ideas in a tangible way by finding water and bringing it to the fields through the collective labor of the villagers. In this political fable, Roumain is careful to create an authentic environment and credible characters. Readers will be emotionally moved as well as ideologically persuaded.";

const BookText7 = () => {
    return (
        <div className="p-4 bg-light rounded">
            <h4 className="font-weight-bold font-italic">'Masters of the Dew' by Jacques Roumain</h4>
            <p>{text}</p>
        </div>
    );
};

export default BookText7;
