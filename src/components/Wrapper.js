import React from 'react';
import Toolbar from './Toolbar';

export default function Wrapper({
  children, 
  title, 
  handleMaximize, 
  maximized, 
  hidden, 
  ...props}) {
    
  function handleClass() {
    if (maximized) {
      return 'maximized';
    } else if (hidden) {
      return 'hidden';
    }
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div 
      id={`${title}Wrapper`} 
      className={handleClass()}
      >
      <Toolbar 
        title={capitalizeFirstLetter(title)}
        handleMaximize={handleMaximize} 
        maximized={maximized} />
      { children }
    </div>
  )
}