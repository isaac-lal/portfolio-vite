import React from 'react';
import { skills } from '../data';
import { Zoom } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <Zoom
      triggerOnce
      fraction={0.5}
      duration={2000}
    >
      <div
        id='skills'
        className='w-full lg:h-screen p-2'
      >
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
            Skills
          </p>
          <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
            What I Can Do
          </h2>
          <div className='text-sm sm:text-base grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'
              >
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto cursor-pointer'>
                    <img
                      src={skill.img}
                      width='64'
                      height='64'
                      alt='HTML'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Skills;
