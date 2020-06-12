import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompress } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar({
  title, 
  handleMaximize, 
  maximized}) {
    
  return (
    <div className="toolbar">
      <h3>{title}
        <FontAwesomeIcon 
          icon={ maximized ? faCompress : faExpandArrowsAlt} 
          pull="right"
          onClick={() => handleMaximize()} />
      </h3>
    </div>
  )
}