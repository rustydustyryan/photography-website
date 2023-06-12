// import React, { useState } from 'react';
// import Data from '../data/images.json';
// import Modal from './Modal';

// function Lightbox() {
//   const [clickedImg, setClickedImg] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   const handleClick = (item, index) => {
//     setCurrentIndex(index);
//     setClickedImg(item.link);
//   };

//   const rightArrow = () => {
//     const totalLength = data.data.length;
//     if (currentIndex + 1 >= totalLength) {
//       setCurrentIndex(0);
//       const newUrl = data.data[0].link;
//       setClickedImg(newUrl);
//       return;
//     }
//     const newIndex = currentIndex + 1;
//     const newUrl = data.data.filter((item) => {
//       return data.data.indexOf(item) === newIndex;
//     });
//     const newItem = newUrl[0].link;
//     setClickedImg(newItem);
//     setCurrentIndex(newIndex);
//   };

//   const leftArrow = () => {
//     const totalLength = data.data.length;
//     if (currentIndex === 0) {
//       setCurrentIndex(totalLength - 1);
//       const newUrl = data.data[totalLength - 1].link;
//       setClickedImg(newUrl);
//     }
//     const newIndex = currentIndex - 1;
//     const newUrl = data.data.filter((item) => {
//       return data.data.indexOf(item) === newIndex;
//     });
//     const newItem = newUrl[0].link;
//     setClickedImg(newItem);
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className='wrapper'>
//       {Data.data.map((item, index) => (
//         <div key={index} className='wrapper-images'>
//           <img
//             src={item.link}
//             alt={item.text}
//             onClick={() => handleClick(item, index)}
//           />
//           <h2>{item.text}</h2>
//         </div>
//       ))}
//       {clickedImg && (
//         <Modal
//           clickedImg={clickedImg}
//           rightArrow={rightArrow}
//           setClickedImg={setClickedImg}
//           leftArrow={leftArrow}
//         />
//       )}
//     </div>
//   );
// }

// export default Lightbox;
