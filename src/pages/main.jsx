import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

const Main = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });
  return (
    <>
      <section className='w-full h-screen relative flex overflow-hidden bg-black' id='scene'>
        <img className='object-cover w-full h-full absolute ' data-depth='0.02' src='/images/hcm2.jpg' />
        <img className='object-cover w-full h-full absolute scale-100' data-depth='0.05' src='/images/hcm2-2.png' />
        <div className='relative mt-52 pt-2 ml-96 text-6xl font-poppins text-white font-semibold'>
          Ha is typing...
        </div>
        <div className='relative mt-72 pt-5 ml-96 text-2xl font-serif text-white font-extralight italic'>
          Full-time developer,
        </div>
        <div className='relative mt-72 pt-12 ml-96 text-2xl font-serif text-white font-extralight italic'>
          part-time Saigon admirer.
        </div>
        <img className='object-cover w-full h-full absolute' data-depth='0.04' src='/images/hcm2-1.png' />
        <img className='relative mt-10 ml-9 w-28' src='/images/logo-transparent.png' />
        <div className='relative flex gap-y-3 mt-10 ml-96 w-28 font-poppins text-white text-lg'>
          <a href='#about'>About</a>
          <span>/</span>
          <a href='#project'>Project</a>
          <span>/</span>
          <a href='#blog'>Blog</a>
          <span>/</span>
          <a href='#contact'>Contact</a>
        </div>
      </section>

    </>
  );
}

export default Main;