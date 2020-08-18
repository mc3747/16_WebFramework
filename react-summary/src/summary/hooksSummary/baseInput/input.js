import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div({
 display: 'flex',
 flexDirection: 'column',

 label: { display: 'flex', alignItems: 'center' },

 input: {
  marginLeft: 8,
 },

 p: {
  color: 'red',
 },
});

function Input({ label, type, helperText, error, ...otherProps }) {
 return (
  <Wrap>
   <label>
    {label}:
    <input {...otherProps} type={type} />
   </label>
   {error && <p>{helperText}</p>}
  </Wrap>
 );
}

Input.propTypes = {
 label: PropTypes.string,
 type: PropTypes.string,
 helperText: PropTypes.string,
 error: PropTypes.bool,
};

export default Input;

