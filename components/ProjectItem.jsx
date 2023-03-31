import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-300 rounded-xl group hover:bg-gradient-to-r from-[#000] to-[#000]'>
    <Image className='rounded-xl group-hover:opacity-30 ease-in duration-300 w-full h-full' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <div className='flex items-center mt-6'>
        <a
            href='https://github.com/Nayzawthant/websiteui'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 mr-8 bg-gradient-to-r from-[#000] to-[#000] button'>Git</button>
          </a>
          <a
            href='https://ubiquitous-manatee-5db6a5.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 bg-gradient-to-r from-[#000] to-[#000]  button'>Demo</button>
          </a>
        </div>
    </div>
 </div>
  )
}

export default ProjectItem