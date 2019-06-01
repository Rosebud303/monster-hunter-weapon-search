import React from 'react';
import { Link } from 'react-router-dom'
import './Weapon.scss'

export const Weapon = (prop) => {
  return (
    <Link className='weapon-card'>
      <p>{prop.weapon.name}</p>
      <img className='weapon-image' src={prop.weapon.picture} />
    </Link>
  )
}

export default Weapon;
