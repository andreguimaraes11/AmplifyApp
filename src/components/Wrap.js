import React from 'react';
import './Wrap.css';

const Wrap = (props) => {
    return (
        <div class="wrap-login">
          {props.children}                 
        </div>
    );
}

export default Wrap;