import React from 'react';
import { links } from '../data';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      id='home'
      className='w-full h-screen text-center'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='tracking-widest text-gray-800 dark:text-gray-500 text-sm sm:text-base'>
            Welcome, my name is
          </p>
          <h1 className='text-4xl sm:text-5xl py-1 sm:py-4 text-gray-700 dark:text-gray-400'>
            <span className='text-[#00bfff]'>Isaac Lal</span>
          </h1>
          <h2 className='py-4 justify-center flex text-base sm:text-lg text-gray-700 dark:text-gray-400'>
            <TypeAnimation
              sequence={[
                'A Web Developer',
                3500,
                'A Coder',
                3500,
                'A Software Engineer',
                3500,
                'A Tech Enthusiast',
                3500,
                'A Digital Consumer',
                3500,
                'A Nerd',
                3500,
                'A Nice Person',
                3500,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </h2>
          <p className='text-sm sm:text-base py-2 sm:py-4 pb-10 sm:pb-20 sm:max-w-[70%] m-auto'>
            I'm a Software Engineer that specializes in full-stack web
            development by implementing both front-end design and configuring
            the back-end. Looking to be a part of the process of making
            beautiful, responsive, and functional products, I am learning every
            single day to improve my skills.
          </p>
          <p className='text-sm sm:text-base uppercase tracking-widest text-[#00bfff]'>
            Let's Connect
          </p>
          <div className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'>
            {links.map((link) => (
              <a
                key={link.id}
                href={link.name}
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
