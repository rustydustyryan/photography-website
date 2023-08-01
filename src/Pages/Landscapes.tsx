import React from 'react';
import Next from '../comps/Next';
import Prev from '../comps/Prev';

function Landscapes() {
  return (
    <>
      <div className='landscapes hero'>
        <img src='/Landscapes/Sunset Loop8.jpg' />
        <img src='/Landscapes/Turtle Wall27.jpg' />
        <img src='/Landscapes/grass long.jpg' />
        <img src='/Landscapes/Sunset Loop4.jpg' />
        <img src='/Landscapes/Grass2.jpg' />
        <img src='/Landscapes/Snow Canyon.jpg' />
        <img src='/Landscapes/Zen Trail2.jpg' />
        <img src='/Landscapes/Zen Trail10.jpg' />
        <img src='/Landscapes/Turtle Wall100.jpg' />
        <Next to='/Portraits' />
        <Prev to='/' />
      </div>
    </>
  );
}

export default Landscapes;
