import React from 'react';
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
      <h1>Loading...</h1>
      <img className='load-img' src={'https://media.giphy.com/media/zocX5Vxv9Bs9q/giphy.gif'} alt='Is Loading' />
    </div>
  )
}

export default Loader;