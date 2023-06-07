import React from 'react';
import Next from './Next';
import Prev from './Prev';

function Landscapes() {
  return (
    <>
      <div className='landscapes hero'>
        <img src='./media/Landscapes/Sunset Loop8.jpg' />
        <img src='./media/Landscapes/Turtle Wall27.jpg' />
        <img src='./media/Landscapes/grass long.jpg' />
        <img src='./media/Landscapes/Sunset Loop4.jpg' />
        <img src='./media/Landscapes/Grass2.jpg' />
        <img src='./media/Landscapes/Snow Canyon.jpg' />
        <img src='./media/Landscapes/Zen Trail2.jpg' />
        <img src='./media/Landscapes/Zen Trail10.jpg' />
        <img src='./media/Landscapes/Turtle Wall100.jpg' />
        <Next to='/Portraits' />
        <Prev to='/' />
      </div>
    </>
  );
}

export default Landscapes;
