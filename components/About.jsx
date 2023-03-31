import React from 'react';
import Image from 'next/image';


const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cv.pdf';
            alink.click();
            console.log(fileURL)
        })
    })
  }
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#1127f2]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hi there! My name is Nay Zaw Thant, and I am a Web Developer with expertise in a wide range of programming languages and technologies.
            I’m passionate about learning new technologies and understand there is more than one way to accomplish a task.
            I am currently working at a Software House in Yangon, where I have honed my skills and gained valuable experience in building responsive, user-friendly websites and applications.
            My programming skills include HTML, CSS, Bootstrap CSS, Tailwind CSS, JavaScript, jQuery, React.js,
            Redux, Nodejs, Next.js, Express.js, MongoDB, MySQL, and Git. I am constantly looking for ways to expand my skillset and stay up-to-date with the latest industry trends and developments.
            I am a self-motivated learner and a skilled problem solver, with a proven track record of building successful ecommerce websites,
            blog websites, and custom web applications. I thrive in a collaborative team environment and am always looking for ways to contribute my skills and expertise to help my colleagues achieve their goals.
            Thank you for considering my application. I look forward to the opportunity to contribute my skills and experience to your team!
          </p>

          <div className="flex-auto mt-6 flex space-x-4 mb-6">
            <button onClick={onButtonClick} className="py-2 shadow-md shadow-gray-400 px-6 rounded-md bg-black text-white" type="submit">
              CV download
            </button>
          </div> 
        </div>
        <div className='w-full h-full m-auto shadow-md relative shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-90 ease-in duration-300'>
          <Image src='/assets/my.jpg' className='rounded-xl' width={900} height={1100} alt='/' />
          <div className='w-full h-full absolute bg-black/70 rounded-xl opacity-80 ease-in duration-300 hover:opacity-0'></div>
        </div>
      </div>
    </div>
  );
};

export default About;
