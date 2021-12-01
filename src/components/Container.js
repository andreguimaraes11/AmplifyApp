import React from 'react';
import './Container.css';

const Container = (props) => {
    return (
      <div class="limitador">
        {props.children}          
      </div>
    );
}

export default Container;