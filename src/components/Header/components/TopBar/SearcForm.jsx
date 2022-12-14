import React from 'react';
import './SearcForm.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearcForm = () => {
  return (
    <div className="input-wrapper">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <form>
        <input
          className="search-input"
          placeholder="Учебное заведение, специальность или профессия"
          type="text"
        ></input>
      </form>
    </div>
  );
};

export default SearcForm;
