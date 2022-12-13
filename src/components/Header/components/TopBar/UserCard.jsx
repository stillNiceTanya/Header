import React from 'react';
import Favorites from './Favorites';
import ava from './img/ava.jpeg'

import './UserCard.css'

const UserCard = () => {
    let userName = 'Екатерина'
    return (
        <div className='user-card-wrapper'>
    <Favorites/>
    <p className='user-name'>{userName}</p>
    <img src={ava} alt='avatar' className='avatar' />
  </div>
    );
}

export default UserCard;
