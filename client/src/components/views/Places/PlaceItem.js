import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../common/Modal/Modal';

const PlaceItem = ({ id, image, title, description, creator, address }) => {
  const [showMap, setShowMap] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  return (
    <Fragment>
      <Modal
        show={showMap}
        onClick={closeMap}
        footer={<button onClick={closeMap}>Close</button>}>
        <div className='map-container'>
          <h2>Mapa</h2>
        </div>
      </Modal>
      <li className='place-item'>
        <div className='place-item__image'>
          <img src={image} alt={title} />
        </div>
        <div className='place-itme__info'>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
          <h4>{creator}</h4>
        </div>
        <div className='place-item__actions'>
          <button onClick={openMap}>View on map</button>
          <Link to={`/places/${id}`}>Edit</Link>
          <button>Delet</button>
        </div>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
