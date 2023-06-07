import React from 'react';
import Next from './Next';

function Home() {
  return (
    <>
      <div className='hero'>
        <img src='./media/Landscapes/Zion.jpg' />
        <Next to='/landscapes' />
      </div>
    </>
  );
}

export default Home;
