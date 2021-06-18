// import React from 'react';
// import './Card.css';


// export const Card = ({imageUrl}) => {



//     return (
//         <div className="card-wrapper"> 
//             <div className="card-container">
//                 <div className="image-container">
//                     <img className="imageUrl" src={imageUrl} alt='' />
//                 </div>
            
//             </div>
//         </div>
//     )
// }
// export default Card

import React from 'react';
import './Card.css';


export const Card = ({imageUrl}) => {



    return (
        <div className="card-wrapper"> 
            <div className="card-container">
                <div className="image-container">
                    <img className="imageUrl" src={imageUrl} alt='' />
                </div>
            
            </div>
        </div>
    )
}
export default Card