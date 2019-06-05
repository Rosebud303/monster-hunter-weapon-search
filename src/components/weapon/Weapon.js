import React from 'react';
import { Link } from 'react-router-dom'
import './Weapon.scss'

export const Weapon = ({id, picture, name}) => {
  
  return (
    <Link id={id} className='weapon-card' to={`/weapons/${id}`}>
      <p id={id} 
        >
         {name}
      </p>
      <img id={id} className='weapon-image'
           src={picture}
           />
    </Link>
  )
}

export default Weapon;
