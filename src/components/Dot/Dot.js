import React from 'react';
import './Dot.css';

const Dot = ({ activeDot, counter, handlerClick }) => {
   return (
      <span onClick={handlerClick} className={`dot ${activeDot === true ? '_active' : ''}`}>
         {counter + 1}
      </span>
   );
}

export default Dot;