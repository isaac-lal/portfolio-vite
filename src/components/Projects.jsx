import React from 'react';
import { projects } from '../data';
import { Rotate } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Rotate
      triggerOnce
      duration={2000}
      fraction={0.5}
    >
      <div
        id='projects'
        className='w-full lg:h-screen flex items-center'
      >
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
            Projects
          </p>
          <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
            What I've Built
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-100 rounded-xl p-4 group hover:shadow-[#00bfff] hover:scale-105 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-100'
              >
                <img
                  className='rounded-xl group-hover:opacity-10'
                  src={project.img}
                  alt='/'
                  width='2000'
                  height='1390'
                />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h2 className='text-2xl sm:text-3xl pb-5 sm:pb-10 text-gray-300 tracking-wider text-center '>
                    {project.name}
                  </h2>
                  <div className='grid md:grid-cols-2 gap-4 sm:gap-8'>
                    <a
                      href={project.demoURL}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='text-center py-3 rounded-3xl bg-[#cccccc] text-gray-800 font-bond sm:text-lg cursor-pointer hover:bg-[#00bfff] ease-in duration-200'>
                        Demo
                      </p>
                    </a>
                    <a
                      href={project.codeURL}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='text-center py-3 rounded-3xl bg-[#cccccc] text-gray-800 font-bond sm:text-lg cursor-pointer hover:bg-[#00bfff] ease-in duration-200'>
                        Code
                      </p>
                    </a>
                  </div>
                  <h2 className='text-center text-xl sm:text-2xl pt-2 sm:pt-8'>
                    Enjoy!
                  </h2>
                  <p className='text-gray-300 text-center'>
                    (Work In Progress)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Rotate>
  );
};

export default Projects;
