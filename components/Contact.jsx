import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser'
import {GrLocation} from 'react-icons/gr'
import {BsTelephone} from 'react-icons/bs'
import loadingImag from '../public/load.gif'


const Contact = () => {

  const ref = useRef();
  const [send, setSend] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        'service_dk44git',
        'template_bcraw9m',
        ref.current,
        'ntKRj2ljU6YDemulu'
      )
      .then(
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

        <div className='flex items-center grid w-full lg:grid-cols-4 gap-8'>
          {/* left */}
          <div className='lg:col-span-2 w-full p-2'>
            <div className=''>
              <div>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  Contact
                </p>
                <h2 className='py-4 text-[#272727] text-2xl'>Get In Touch</h2>
                <div className='flex items-center mb-8'>
                  <div className='bg-[#ecf0f3] mr-6 rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                    <GrLocation />
                  </div>

                  <p className='text-[#333333]'>Yangon - Myanmar</p>
                </div>
                <div className='flex items-center mb-8 '>
                  <div className='bg-[#ecf0f3]  mr-6  rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                    <AiOutlineMail />
                  </div>

                  <p className='text-[#333333]'>nayzawt349@gmail.com</p>
                </div>
                <div className='flex items-center mb-6 '>
                  <div className='bg-[#ecf0f3] mr-6  rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                    <BsTelephone />
                  </div>

                  <p className='text-[#333333]'>+95 940095846</p>
                </div>
                <div className='flex items-center py-4'>
                  <a
                    href='https://www.linkedin.com/in/nay-zaw-zaw-b6b345271/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full mr-4 pl-3 text-xl cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Nayzawthant'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full mr-4 pl-3 text-xl cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>


                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-2 w-full h-auto p-4'>
            <div>
              {
                loading ? <div className="loading-img"><Image src={loadingImag} className='image' alt="" width={100} height={100} /></div> :
                  <form
                    ref={ref}
                    onSubmit={handleSubmit}
                    method='POST'
                    encType='multipart/form-data'
                  >
                    <div className='flex flex-col py-2 mt-12'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input
                        className='focus:outline-none rounded-md p-2 flex bg-[#ecf0f3]'
                        type='name'
                        name='user_name'
                        required
                      />
                    </div>
                    <div className='flex flex-col py-2'>
                      <label className='uppercase text-sm py-2'>Email</label>
                      <input
                        className='focus:outline-none rounded-md p-2 flex bg-[#ecf0f3]'
                        type='email'
                        name='user_email'
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                      />
                    </div>
                    <div className='flex flex-col py-2'>
                      <label className='uppercase text-sm py-2'>Message</label>
                      <textarea
                        className=' focus:outline-none rounded-md p-2 bg-[#ecf0f3]'
                        rows='5'
                        name='message'
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                      ></textarea>
                    </div>
                    <button className=' shadow-md shadow-gray-400 bg-text-[#1127f2] p-2 px-4  text-gray-100 mt-4'>
                      Send Message
                    </button>
                    <p style={{ color: 'red' }} className='mt-6'>
                      {
                        send && 'Your message has been sent successfully!'
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
