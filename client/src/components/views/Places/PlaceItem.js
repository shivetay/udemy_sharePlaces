import React from 'react';

const PlaceItem = ({ id, image, title, description, creator, address }) => {
  return (
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
        <button>View on map</button>
        <button>Edit</button>
        <button>Delet</button>
      </div>
    </li>
  );
};

export default PlaceItem;
