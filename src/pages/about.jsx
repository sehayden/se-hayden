import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <>
      <section className='w-full h-screen relative flex overflow-hidden bg-[#110c12]'>
        {/* <Parallax speed={-5}>
          <video autoPlay loop muted className='h-1/2 ' >
            <source src='/images/ha-vid.mp4' type='video/mp4' />
          </video>
        </Parallax> */}
        <Parallax speed={5}>
          <img src='/images/ha-1.png' className='h-full' />
        </Parallax>


      </section>

    </>
  );
}

export default About;