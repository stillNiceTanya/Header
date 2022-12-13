import React from 'react';
import './SearcForm.css'

import { faBell} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearcForm = () => {
    return (
        <div className='input-wrapper'>
                  <FontAwesomeIcon icon={faBell} className='search-icon'/>
            <form>
                <input className='search-input' placeholder='Учебное заведение, специальность или профессия'
                type='text'></input>

            </form>
        </div>
    );
}

export default SearcForm;
