import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelloWorld = ({saludo}) => {
    const [texto, setTexto] = useState('');

    return (
        <div>
            <h1 className='display-1'>Hello {saludo}{texto}</h1>
            <button onClick={()=> setTexto('(from changed state)!') }>Click me!</button>
        </div>
    );
};

export default HelloWorld;