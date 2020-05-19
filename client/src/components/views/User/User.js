import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from '../../layout/Avatar/Avatar';
import Card from '../../layout/Card/Card';
import './User.scss';

class User extends Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    placeCount: PropTypes.number,
  };
  render() {
    const { id, name, image, placeCount } = this.props;
    return (
      <li className='user-item'>
        <Card className='user-item__content'>
          <Link className='' to={`/${id}/places`}>
            <div className='user-item__image'>
              <Avatar image={image} alt={name} />
            </div>
            <div className='user-item__info'>
              <h1>{name}</h1>
              <p>
                {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
              </p>
            </div>
          </Link>
        </Card>
      </li>
    );
  }
}

export default User;
