import { useState, useEffect } from 'react';
import Avatar from '../assets/img/tony.jpg'

export default function AboutPage() {
  return (
     <>
      <section className='container flex flex-col lg:flex-row'>
        <section className='container my-1 mx-auto px-4 w-100 lg:w-1/2'>
          <img src={Avatar} alt="Avatar" className='rounded-full mx-auto px-4'/>
        </section>
        <section className='container my-1 mx-auto px-4 flex flex-col justify-center w-100 lg:w-1/2'>
          <h1 className='rounded-full px-4 text-4xl'>Jose Freites</h1>
          <h2 className='rounded-full px-4'>(Venecoderr)</h2>
          <p className='rounded-full px-4 text-justify'>Hi, my name is Jose, I'm a 24yo Venezuelan living in Orlando, Fl, 
          I have a passion for engineering and building useful things, and I'm
          always looking to expand the <i>array</i> of building skills I have. 
          For that I have recently graduated from the UCF Coding bootcamp and I'm looking 
          for opportunities to build more awesome stuff</p>
        </section>
      </section>
    </>
  )
}