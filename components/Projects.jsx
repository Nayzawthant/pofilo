
import React from 'react';
import propertyImg from '../public/assets/projects/sports.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <p className='text-xl tracking-widest uppercase text-[#1127f2]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='w-full h-full grid md:grid-cols-3 gap-8 '>
          <ProjectItem
            className='w-full h-full'
            title='Sports website'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
