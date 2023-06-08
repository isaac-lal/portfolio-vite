import React from 'react';
import youtubeImg from '../../src/assets/projects/youtube.jpg';
import netflixImg from '../../src/assets/projects/netflix.jpg';
import twitterImg from '../../src/assets/projects/twitter.jpg';
import spotifyImg from '../../src/assets/projects/spotify.jpg';
import ProjectItem from './ProjectItem';
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
            <ProjectItem
              title='Netflix Clone'
              backgroundImg={netflixImg}
              demoURL='https://netflix-clone.isaaclal.com/'
              codeURL='https://github.com/isaaclal1/netflix-clone'
            />
            <ProjectItem
              title='Twitter Clone'
              backgroundImg={twitterImg}
              demoURL='https://twitter-clone.isaaclal.com/'
              codeURL='https://github.com/isaaclal1/twitter-clone'
            />
            <ProjectItem
              title='Spotify Clone'
              backgroundImg={spotifyImg}
              demoURL='https://spotify-clone.isaaclal.com/'
              codeURL='https://github.com/isaaclal1/spotify-clone'
            />
            <ProjectItem
              title='YouTube Clone'
              backgroundImg={youtubeImg}
              demoURL='https://youtube-clone.isaaclal.com/'
              codeURL='https://github.com/isaaclal1/youtube-clone'
            />
          </div>
        </div>
      </div>
    </Rotate>
  );
};

export default Projects;
