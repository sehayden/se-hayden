import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

const Main = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });
  return (
    <>
      <section className='w-full h-screen relative flex justify-center items-center overflow-hidden bg-black' id='scene'>
        <img className='object-cover w-full h-full absolute ' data-depth='0.02' src='/images/hcm2.jpg' />
        <div className='relative mt-52 w-full h-full text-center text-9xl font-poppins text-white font-bold' style={{ 'top': '100px' }}>
          Hayden
        </div>
        <img className='object-cover w-full h-full absolute' data-depth='0.04' src='/images/hcm2-1.png' />

        <img className='object-cover w-full h-full absolute scale-100' data-depth='0.05' src='/images/hcm2-2.png' />
        <img className='relative top-52 mt-52  w-28' src='/images/logo-transparent.png' />

      </section>
      <section>
        <div>test</div>
      </section>

    </>
  );
}

export default Main;