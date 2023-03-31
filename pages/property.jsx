import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/sportwebsite.png';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='bottom'
          src='/assets/projects/sportwebsite.png'
          width={900}
          height={900}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sports</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            SPORTS is a sports news website that allows users to read and stay updated with the latest sports news. Built using Next.js for the website UI, Node.js for the API, and Express and MongoDB for the database, SPORTs is designed to render posts quickly using React virtual DOM.
            The website has a user-friendly interface and a responsive design, with pure CSS used for styling and reusable components used for the layout. SPORTs also has an admin panel built using React JS, allowing admins to easily manage the website is content.
            In addition, SPORTs uses Cloudinary for media management and Swagger for API documentation. The website is accessible to everyone who is interested in sports news, and its clean design and smooth functionality make it a reliable source for sports enthusiasts.
            Overall, SPORTs is a reliable and efficient website for sports news, with a well-designed interface and features that make it stand out among its competitors.
          </p>
          <a
            href='https://github.com/Nayzawthant/websiteui'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 bg-black mt-4 mr-8 button'>Code</button>
          </a>
          <a
            href='https://ubiquitous-manatee-5db6a5.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 bg-black mt-4 button'>Demo</button>
          </a>
          <Link href='/#projects'>
          <p className='underline cursor-pointer mt-6'>Back</p>
        </Link>
        </div>

        
      </div>
    </div>
  );
};

export default property;
