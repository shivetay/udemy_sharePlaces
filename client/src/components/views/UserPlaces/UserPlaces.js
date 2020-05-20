import React from 'react';

import PlaceItem from '../Places/PlaceList';

const DUMMY_PLACES = [
  {
    id: 1,
    title: 'Wilczyce',
    description: 'Small town near Wrocław',
    imageUrl:
      'https://images.unsplash.com/photo-1470423725703-b136e2a8254c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
    address: 'Wilczyce, 51-361',
    coord: {
      lat: 51.1299765,
      lng: 17.1419853,
    },
    creator: 1,
  },
  {
    id: 2,
    title: 'Wrocław',
    description: 'Big town near Wilczyce',
    imageUrl:
      'https://images.unsplash.com/photo-1470423725703-b136e2a8254c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
    address: 'Wrocław, 51-361',
    coord: {
      lat: 51.1299765,
      lng: 17.1419853,
    },
    creator: 1,
  },
];

const UserPlaces = () => {
  return <PlaceItem places={DUMMY_PLACES} />;
};

export default UserPlaces;
