import React from 'react';
import About_IMG from '../assets/about.jpeg';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h6>About</h6>
          <h2>Who I Am</h2>
          <p className='my-5 text-sm sm:text-base py-2 text-gray-300'>
            Interacting with websites from a young age, I was very intrigued by
            the steps needed to build them. Many web applications today took
            extreme work and effort to create an extremely well-crafted version
            that many users can enjoy. I wanted to become a part of that
            process, so I tried to build a simple website and learning all I can
            about Web Development. I advanced into more difficult projects and
            eventually, I was able to produce full-stack applications as a part
            of a team. Building many real-world projects and applications that
            are useful helped me appreciate the process much more and I want to
            showcase what I've done in my portfolio. I hope you enjoy!{' '}
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-100 rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
          <img
            src={About_IMG}
            className='rounded-xl'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
