import React, { useState } from 'react';
import Portraits from '../Pages/Portraits';
import Anna from '../Pages/Anna';

function Lightbox() {
  const [image, setImage] = useState(null);

  return (
    <>
      <div className='lightboxBg'></div>
      {/* <div className='lightboxImg'></div> */}
    </>
  );
}

export default Lightbox;
