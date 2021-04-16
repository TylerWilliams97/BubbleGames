import React from 'react';
import logo from './bgLogo.jpg'

console.log(logo);

function BGLogo() {
  // Import result is the URL image
  return <img src={logo} alt="Bubbles Games" />;
}

export default BGLogo;