import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser'
import loadingImag from '../public/load.gif'

const Contact = () => {

  const ref = useRef();
  const [send, setSend] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm (
        'service_dk44git',
        'template_bcraw9m',
        ref.current,
        'ntKRj2ljU6YDemulu'
      ) 
      .then (
        result => {
          console.log(result.text);
          setSend(true);
          setLoading(false)
        },
        error => {
          console.log(error.text)
          setSend(false);
          
        }
      )
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='/assets/my.jpg'
                  width={900}
                  height={900}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Nay Zaw Thant</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/mg-nay-zaw-40046426b/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Nayzawthant'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              {
                loading? <div className="loading-img"><Image src={loadingImag} className='image' alt="" width={100} height={100} /></div> :
                <form
                ref={ref}
                onSubmit={handleSubmit}
                method='POST'
                encType='multipart/form-data'
              >
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='name'
                    name='user_name'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full bg-text-[#1127f2] p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
                <p style={{color: 'red'}}>
                  {
                    send && 'Your are email successful'
                  }
                </p>
              </form>
              }
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#1127f2]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
