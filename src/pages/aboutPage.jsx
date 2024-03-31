import { useState, useEffect } from 'react';
import Avatar from '../assets/img/tony.jpg'
import { icons } from '../utils/icons';

export default function AboutPage() {
  return (
     <>
      <section className='container flex flex-col lg:flex-row'>
        <section className='container my-1 mx-auto px-4 w-100 lg:w-1/2'>
          <img src={Avatar} alt="Avatar" className='rounded-full mx-auto px-4'/>
        </section>
        <section className='container my-1 mx-auto px-4 flex flex-col justify-center w-100 lg:w-1/2'>
          <h1 className='px-4 text-4xl text-center lg:text-left'>Jose Freites</h1>
          <h2 className='px-4 flex justify-center lg:justify-start'>(Venecoderr) <a href="https://github.com/venecoderr" className='flex'><img src={icons.github} alt="github logo" className='size-6'/></a><a href="www.linkedin.com/in/jose-freites-8294a82b4" className='flex'><img src={icons.linkeIn} alt="github logo" className='size-6'/></a></h2>
          <p className='px-4 text-justify'>Hi, my name is Jose, I'm a 24yo Venezuelan living in Orlando, Fl, 
          I have a passion for engineering and building useful things, and I'm
          always looking to expand the <i>array</i> of building skills I have. 
          For that I have recently graduated from the UCF Coding bootcamp and I'm looking 
          for opportunities to build more awesome stuff</p>
        </section>
      </section>
    </>
  )
}