import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar({title}) {
  return (
    <div className="toolbar">
      <h4>{title}
        <FontAwesomeIcon icon={faExpandArrowsAlt} pull="right" />
      </h4>
    </div>
  )
}