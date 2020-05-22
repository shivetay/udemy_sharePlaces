import React from 'react';

import Input from '../../common/Input/Input';
import { VALIDATOR_REQUIRE } from '../../common/Input/Validator';

const NewPlace = () => {
  const titleInput = (id, value, isValid) => {};

  return (
    <form>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Invalida data'
        onInput={titleInput}
      />
    </form>
  );
};

export default NewPlace;
