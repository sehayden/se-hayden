import React from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Main = () => {
  return (
    <>
      <section id='header' className='w-full h-screen relative justify-center'>

        <img className='object-cover w-full h-full absolute' src='/images/hcm2.jpg' />

        <img className='object-cover w-full h-full absolute' src='/images/hcm2-1.png' />


        <img className='absolute w-28' src='/images/logo-transparent.png' />
        <div className='relative text-9xl font-poppins text-white font-bold'>
          Hayden
        </div>

      </section>
      <section>
        <div>test</div>
      </section>

    </>
  );
}

export default Main;