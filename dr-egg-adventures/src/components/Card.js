import React from 'react';
import './Card.css';


export const Card = ({imageUrl}) => {



    return (
        <div className="card-container">
            <div className="image-container">
                <img className="imageUrl" src={imageUrl} alt='' />
            </div>
           
        </div>
    )
}
export default Card
