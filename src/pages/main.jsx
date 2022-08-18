import React from 'react';
import { ReactComponent as H } from './h.svg';
import { ReactComponent as A } from './a.svg';

const Main = () => {
  return (
    <>
      <section id='header' className='w-full h-screen relative justify-center'>
        <img className='object-cover w-full h-full absolute' src='/images/castle.jpg' />
        <div className='pl-5 pt-5'>
          <img className='relative w-28' src='/images/logo-transparent.png' />
        </div>
        <div className='relative flex justify-center'>
          <H className='h-52 w-52 relative' />
          ayden
        </div>
      </section>
      <section>
        <div>test</div>
      </section>

    </>
  );
}

export default Main;