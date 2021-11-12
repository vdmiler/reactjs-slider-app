import React, { useEffect, useState } from 'react';
import './App.css';
import Slide from './components/Slide/Slide';
import Dot from './components/Dot/Dot';
import { slides } from './constants';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeClass, setActiveClass] = useState({ opacity: 0 });

  useEffect(() => {
    setTimeout(() => {
      setActiveClass({
        opacity: 1,
      })
    }, 100)
  }, [activeIndex])

  const nextSlide = () => {
    if (activeIndex == slides.length - 1) {
      setActiveIndex(0)
      setActiveClass({
        opacity: 0
      })
    } else {
      setActiveIndex(prev => prev + 1)
      setActiveClass({
        opacity: 0
      })
    }
  }

  const prevSlide = () => {
    if (activeIndex == 0) {
      setActiveIndex(slides.length - 1)
      setActiveClass({
        opacity: 0
      })
    } else {
      setActiveIndex(prev => prev - 1)
      setActiveClass({
        opacity: 0
      })
    }
  }
  return (
    <div className="App">
      <h1>Slider with React.js </h1>
      <div className="flex-wrapper">
        <div className="slider-wrapper">
          <Slide
            key={activeIndex}
            slides={slides}
            activeIndex={activeIndex}
            activeClass={activeClass}
          />
        </div>
        <div className="slider-controls">
          <div className="dots-wrapper">
            {
              slides.map((_, i) => {
                return (
                  <Dot
                    key={i}
                    counter={i}
                    activeDot={activeIndex == i}
                    handlerClick={() => { setActiveIndex(i); setActiveClass({ opacity: 0 }) }}
                  />
                )
              })
            }
          </div>
          <div className="arrows-wrapper">
            <div onClick={prevSlide} className="arrow-left btn-prev"></div>
            <div onClick={nextSlide} className="arrow-rigth btn-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
