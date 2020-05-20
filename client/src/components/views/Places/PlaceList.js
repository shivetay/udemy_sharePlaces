import React from 'react';

import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return <div>No Places found</div>;
  }

  return (
    <ul className='place-list'>
      {places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creator}
          coord={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
