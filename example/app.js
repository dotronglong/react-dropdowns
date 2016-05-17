import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../src/components/Dropdown.react';

window.onload = function() {
  ReactDOM.render(
    <Dropdown label="let do it okay?"/>,
    document.getElementById('example')
  );
};
