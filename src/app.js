import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<p>Hello World</p> , document.getElementById('app'));

// When you create 2 tags open/close and add the content inbetween you have to use the {props.children} option to access and render to screen
