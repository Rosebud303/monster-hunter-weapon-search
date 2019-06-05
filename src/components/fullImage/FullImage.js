import React from 'react';
import { Link } from 'react-router-dom';
import './FullImage.scss';

const FullImage = ({picture, id, name}) => {
  return (
    <div>
      <div className='full-image'>
        <h2 className='image-name'>{name}</h2>
        <img className='full-picture' src={picture}/>
        <Link className='image-back' to={`/weapons/${id}`}>Back</Link>
      </div>
    </div>
  )
}

export default FullImage
