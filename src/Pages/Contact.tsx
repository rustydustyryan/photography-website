import React from 'react';

function Contact() {
  return (
    <>
      <div className='contact-page'>
        <div className='contact-p'>
          <p>
            If you would like to get in touch with me, I can be reached at{' '}
            <span className='bold'> rustydustyryan@gmail.com</span>
          </p>
          <br />
          <p>
            I am constantly creating and looking for new creative opportunities,
            so don't be afraid to reach out! I would love to help you with your
            next project and further explore the world of photography.
          </p>
          <br />
        </div>
        {/* <div>
        <img className='ryan' src='/public/Ryan15.jpg' alt='' />
      </div> */}
        <div>
          <p>
            I also enjoy spending time doing front end web development,
            songwriting/producing and staying active, among many other things.
            If you would like to check out some of my other work, it can be
            accessed via the links below.
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
        </div>
      </div>
      {/* <div className='footer'>
        <h1>&copy; Ryan Andersen Photography 2023</h1>
      </div> */}
    </>
  );
}

export default Contact;
