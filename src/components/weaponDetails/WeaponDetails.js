import React from 'react';
import './WeaponDetails.scss';
import { Link } from 'react-router-dom';

const WeaponDetails = ({type, name, minDMG, maxDMG, rarity, damageType, craftable, picture}) => {
  return (
    <div className='back'>
      <div className='details'>
        <div className='name-and-img'>
          <h2>{name}</h2>
          <img src={picture} />
        </div>
        <div className='dmg'>
          {/* <p className='cate0'>Damage</p> */}
          <p><span className='cate1'>Min:</span> {minDMG}</p>
          <p><span className='cate2'>Max:</span> {maxDMG}</p>
          <p><span className='cate3'>DMG Type:</span> {damageType}</p>
          <p><span className='cate'>Type:</span> {type}</p>
          {
            craftable ? <p><span className='cate'>Craftable:</span> True</p> 
            : 
            <p><span className='cate'>Craftable:</span> False</p>
          }
          <p><span className='cate'>Rarity:</span> {rarity}</p>
        </div>
        <Link className='home' to='/weapons'><p className='home2'>BACK</p></Link>
      </div>
    </div>
  )
}

export default WeaponDetails
