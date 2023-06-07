import React from 'react';

function Contact() {
  return (
    <>
      <div className='contact-page'>
        <div className='contact-p'>
          <p>
            For inquiries, please contact me via email{' '}
            <span className='bold'> rustydustyryan@gmail.com</span>
          </p>
        </div>
        {/* <div>
        <img className='ryan' src='/media/Ryan15.jpg' alt='' />
      </div> */}
        <div>
          <p>
            As well as photography, I also enjoy spending time doing front end
            web development, songwriting/producing and photography among many
            other things. If you would like to check out some of my other work,
            it can be accessed via the links below.
          </p>
        </div>
        <div className='contact-links'>
          <a href='https://ryandesign.co' target='_blank'>
            <i className='fa-solid fa-user fa-2x'></i>
          </a>
          <a href='https://github.com/rustydustyryan' target='_blank'>
            <i className='fa-brands fa-github fa-2x'></i>
          </a>
          <a href='https://www.musickeeps.com' target='_blank'>
            <i className='fa-solid fa-headphones fa-2x'></i>
          </a>
          <a href='https://www.ryanimage.com' target='_blank'>
            <i className='fa-solid fa-camera fa-2x'></i>
          </a>
        </div>
      </div>
      {/* <div className='footer'>
        <h1>&copy; Ryan Andersen Photography 2023</h1>
      </div> */}
    </>
  );
}

export default Contact;
