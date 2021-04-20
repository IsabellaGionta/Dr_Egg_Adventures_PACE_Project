import React from 'react'
import getAll from '../services/characters.js';
import { useEffect } from 'react';
// import characters from '/dummy.js';
import { NavItem } from 'react-bootstrap';


export const IndividualCharacters = ({item}) => {

//     useEffect(() => {
//         console.log("effect is being run") // unit test
//         getAll()
//         .then (res => {
//           console.log(res.data)
    
//         })
//       })

    return (
      <div>
        {/* <img src={item.image} variant ='top' /> */}
        <h1> Individual character page </h1>
      
      </div>
      
    )
}
export default IndividualCharacters

{/* <>
      {characters.map(item => (
        <h2> {item.image}</h2>
      ))}
        // <div>
        //     This is the Individual character page 
        //     {/* {characters.image} */}
            
        // </div>
        // </> */}