import React from 'react';
import Next from '../comps/Next';
import Prev from '../comps/Prev';

function Landscapes() {
  return (
    <>
      <div className='landscapes hero'>
        <img src='/public/Landscapes/Sunset Loop8.jpg' />
        <img src='/public/Landscapes/Turtle Wall27.jpg' />
        <img src='/public/Landscapes/grass long.jpg' />
        <img src='/public/Landscapes/Sunset Loop4.jpg' />
        <img src='/public/Landscapes/Grass2.jpg' />
        <img src='/public/Landscapes/Snow Canyon.jpg' />
        <img src='/public/Landscapes/Zen Trail2.jpg' />
        <img src='/public/Landscapes/Zen Trail10.jpg' />
        <img src='/public/Landscapes/Turtle Wall100.jpg' />
        <Next to='/Portraits' />
        <Prev to='/' />
      </div>
    </>
  );
}

export default Landscapes;
