import React, { isValidElement } from 'react';
import { useState } from 'react';
import Next from '../comps/Next';
import Prev from '../comps/Prev';

function Portraits() {
  return (
    <>
      <div className='portraits hero'>
        <img src='/media/CoffeeGuy/CoffeeGuyFinal.jpg' />
        <img src='/media/Anna/Anna.jpg' />
        <img src='/media/Breawna/BreawnaDreaming1.jpg' className='breawna' />
        <img src='/media/Isaac/IsaacZion9.jpg' className='isaac' />
        <img src='/media/Self/Ryan306.jpg' />
        <img src='/media/Jada/JadaSun4.jpg' />
        <img src='/media/Parker/Parker9.jpg' />
        <img src='/media/Students/Alyssa.jpg' />
        <img src='/media/Vinyl/Vinyl10.jpg' />
        <img src='/media/Couple/Couple4.jpg' />
        <Next to='/Prints' />
        <Prev to='/Landscapes' />
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
