import React from 'react';
import Container from './Container.js';
import Field from './Field.js';
import Wrap from './Wrap.js';

const Screen = (props) => {
    return (
        <Container>
          <Field>   
            <Wrap>
            {props.children}                 
            </Wrap>
          </Field>        
        </Container>          
    );
}

export default Screen;