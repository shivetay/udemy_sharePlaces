import React from 'react';

import User from '../User/User';

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className=''>
        <h2>No Users found</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
