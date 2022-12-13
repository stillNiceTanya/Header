import React from 'react';
// import favIcon from './img/fav.png'

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Favorites.css'

const Favorites = () => {

    let currentFavorites = 1
    return (
        <div className='favorites-wrapper'>
       <FontAwesomeIcon icon={faHeart} />
       <div>{currentFavorites}</div>
        </div>
    );
}

export default Favorites;
