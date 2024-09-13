import React from 'react';
import Card from '../Card/Card';

const Cards = ({cards}) => {
    // console.log(cards)
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                cards?.map(card =><Card key={card.id} card={card}></Card>)


            }
            {
                                cards?.map(card =><Card key={card.id} card={card}></Card>)
                
            }
            {                                cards?.map(card =><Card key={card.id} card={card}></Card>)

}  
        </div>
    );
};

export default Cards;