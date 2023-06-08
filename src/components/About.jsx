import React from 'react';
import About_IMG from '../assets/about.jpeg';
import { Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <Slide
      triggerOnce
      fraction={0.5}
      duration={2000}
      direction='left'
      cascade
    >
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
            <p className='text-sm sm:text-base py-2 text-gray-300'>
              I was always fascinated with the web ever since I was a kid in
              middle school. I had no idea what technology was until December
              2015, when I was in 7th grade, because I was never exposed to it
              in my childhood. My English teacher gave me a laptop for the first
              time to type my essay on, and I instantly fell in love with it. I
              would just go on Google to search up a lot of things that
              interested me, and it always had the answers to everything.
              Knowing the power of Google just made me fall in love with
              technology, and it just continues to rapidly improve as time
              passes.{' '}
            </p>

            <p className='text-sm sm:text-base py-2 text-gray-300'>
              Fast forward to 2022, when I am in college pursuing a Computer
              Science major. I had absolutely no idea what I wanted to do for my
              career. There were so many options like Web Development, App
              Development, Machine Learning, and Game Development just to name a
              few. I tried making atleast one of every single project for the
              different tech fields and learning the concepts, but I fell in
              love with Web Development 100x more than every other field. It was
              so fun designing my websites and I was extremely engaged working
              on them that I continued to improve my skills.{' '}
            </p>

            <p className='text-sm sm:text-base py-2 text-gray-300'>
              Now, I am pursuing Web Development by mastering my skills to
              create my dream website projects sooner. I am learning every
              single day to hone my skills and learn new technologies that just
              make developing websites easier and more fun to do. As I master my
              skills, my work is improving very steadily. I am very engaged in
              the process and I will continue to be engaged and deliver quality,
              immersive, and seamless projects that many people will come to
              love. I hope that you are excited!{' '}
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
    </Slide>
  );
};

export default About;
