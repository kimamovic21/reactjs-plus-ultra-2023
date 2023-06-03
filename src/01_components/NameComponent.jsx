import React from 'react';

const NameComponent = (props) => {

  return (
    <h3>Hi. My name is {props.name}. I'm {props.age} years old. I come from {props.city}</h3>
  );
};

export default NameComponent;
