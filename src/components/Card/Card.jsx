import React from 'react';
import { Link } from 'react-router-dom';



const Card = ({card}) => {
    const {picture,category,category_bg_color,card_bg_color,id,
      text_button_bg_color,description,price,text_color,title,}=card || {};
    console.log(card)
    return (
      <div>
        <Link to={`/cards/${id}`}>
                <div style={{background:card_bg_color}}>
 
 <img src={`/Resources/${card?.picture}`}></img>
<button style={{color:text_color,backgroundColor:text_button_bg_color}}
className=''>{card.category}</button>
<h1 style={{color:text_color}} className='text-[20px] w-[241px] h-[24px] ' >{title}</h1>
<p> {description} </p>
<p>{price} </p>
</div>

        </Link>

      </div>

    );
};

export default Card;