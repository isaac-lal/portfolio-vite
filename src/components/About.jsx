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
          <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
            About
          </p>
          <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
            Who I Am
          </h2>
          <p className='my-5 text-sm sm:text-base py-2 text-gray-300'>
            Interacting with websites from a young age, I was very intrigued by
            the process of building them. I said to myself in 2016 that I wanted
            to make my own website but I haven't learned anything at all about
            how to do that. When August 2022 rolled around, I decided that I
            wanted to truly start learning how to code. I tried to build a
            simple website, mobile app, computer app, and game. Out of all the
            things that I built, the website was by far the most enjoyable
            experience that I had designing something and it was extremely fun!
            With the goal of wanting to enjoy that experience more, I started
            learning all I can about website building. Specializing in Web
            Development, I built many real-world projects and applications. In
            addition, I worked for many companies on internships to build up my
            skills and talents. Therefore, I designed this portfolio to showcase
            those skills and projects to you. So I would like to welcome you to
            my portfolio and I hope that you enjoy!{' '}
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
