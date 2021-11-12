import React from 'react';

const Slide = ({ slides, activeIndex, activeClass }) => {
   return (
      <div className="slide">
         <img src={slides[activeIndex]} alt="" style={activeClass} />
      </div>
   );
}

export default Slide;