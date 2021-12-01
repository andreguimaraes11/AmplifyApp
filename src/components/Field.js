import React from 'react';
import './Field.css';

const Field = (props) => {
    return (
        <><div class="field">
          {props.children}                 
        </div></>        
    );
}

export default Field;