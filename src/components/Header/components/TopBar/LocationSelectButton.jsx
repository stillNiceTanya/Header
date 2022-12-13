import React from 'react';
import ava from './img/ava.jpeg'

import { faCompass} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './LocationSelectButton.css'

const LocationSelectButton = () => {
    let currentlocation = 'Москва'
    return (
        <div className='location-select-button'>

            <FontAwesomeIcon icon={faCompass} className='location-img' />
            <p>{currentlocation}</p>
        </div>
    );
}

export default LocationSelectButton;
