import React from 'react';

import UserList from '../UserList/UserList';

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: 'Mieszko Dawidowicz',
      image:
        'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      places: 5,
    },
    {
      id: '2',
      name: 'Dorota Dawidowicz',
      image:
        'https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      places: 12,
    },
    {
      id: '3',
      name: 'Łukasz Dawidowicz',
      image:
        'https://images.unsplash.com/photo-1504899567410-7501a313cadd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      places: 6,
    },
    {
      id: '4',
      name: 'Chili Dawidowicz',
      image:
        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      places: 500,
    },
  ];
  return (
    <section>
      <UserList users={USERS} />
    </section>
  );
};

export default Users;
