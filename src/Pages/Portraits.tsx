import React, { isValidElement } from 'react';
import { useState } from 'react';
import Next from '../comps/Next';
import Prev from '../comps/Prev';
import Lightbox from '../comps/Lightbox';

function Portraits() {
  return (
    <>
      <div className='portraits hero'>
        <img src='/public/CoffeeGuy/CoffeeGuyFinal.jpg' className='zoom-img' />
        <img
          onClick={Lightbox}
          src='/public/Anna/Anna.jpg'
          className='zoom-img'
        />
        <img
          src='/public/Breawna/BreawnaDreaming1.jpg'
          className='breawna zoom-img'
        />
        <img src='/public/Isaac/IsaacZion9.jpg' className='isaac zoom-img' />
        <img src='/public/Self/Ryan306.jpg' className='zoom-img' />
        <img src='/public/Jada/JadaSun4.jpg' className='zoom-img' />
        <img src='/public/Parker/Parker9.jpg' className='zoom-img' />
        <img src='/public/Students/Alyssa.jpg' className='zoom-img' />
        <img src='/public/Vinyl/Vinyl10.jpg' className='zoom-img' />
        <img src='/public/Couple/Couple4.jpg' className='zoom-img' />
        <Next to='/Prints' />
        <Prev to='/Landscapes' />
        <Lightbox />
      </div>
    </>
  );
}

// const Hover = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div>
//       <div>

//       </div>
//     </div>
//   )
// }

export default Portraits;
