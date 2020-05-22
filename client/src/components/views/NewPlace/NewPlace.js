import React from 'react';

import Input from '../../common/Input/Input';
import { VALIDATOR_REQUIRE } from '../../common/Input/Validator';

const NewPlace = () => {
  return (
    <form>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Invalida data'
      />
    </form>
  );
};

export default NewPlace;
