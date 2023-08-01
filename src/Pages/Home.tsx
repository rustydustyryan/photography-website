import React from 'react';
import Next from '../comps/Next';

function Home() {
  return (
    <>
      <div className='hero'>
        <img src='/public/Landscapes/Zion.jpg' />
        <Next to='/landscapes' />
      </div>
    </>
  );
}

export default Home;
