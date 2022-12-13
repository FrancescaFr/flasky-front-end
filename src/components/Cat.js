import React from 'react'; // no longer necessary
import PropTypes from 'prop-types';

const Cat = (props) => {
  return (
    <li>
      <h3>Cat Name: {props.name}</h3>
      <h3>Personality: {props.personality}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Caretaker: {props.caretaker}</h3>
      <button>Pet Cat</button>
    </li>
  )
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  personality: PropTypes.string,
  color: PropTypes.string,
  caretaker: PropTypes.string.isRequired,
}


export default Cat;
