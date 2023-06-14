import React, { useRef } from 'react';
import { links } from '../data';
import Contact_IMG from '../assets/contact.jpg';
import emailjs from '@emailjs/browser';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            '"Thank you for sending your message! I\'ll contact you shortly! :)" -Isaac Lal'
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            '"There was an error sending your message. If it continues, send me an email at: isaaclal124@gmail.com :)" -Isaac Lal'
          );
        }
      );
  };

  return (
    <div
      id='contact'
      className='w-full lg:h-screen flex items-center'
    >
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <h6>Contact</h6>
        <h2>Where I'm Available</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-100 rounded-xl p-4 hover:shadow-[#00bfff] ease-in duration-100'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl ease-in duration-300'
                  src={Contact_IMG}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Isaac Lal</h2>
                <h3>Software Engineer</h3>
                <p className='text-sm sm:text-base py-4'>
                  I am available for communication through email. Just fill out
                  the form to send me an email and we'll talk!
                </p>
              </div>
              <div>
                <p className='text-sm sm:text-base uppercase pt-8 text-[#00bfff]'>
                  Let's Connect
                </p>
                <div className='text-base sm:text-lg flex items-center justify-between py-4'>
                  {links.map((link) => (
                    <a
                      key={link.id}
                      href={link.name}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-100 rounded-xl lg:p-4 hover:shadow-[#00bfff] ease-in duration-100'>
            <div className='p-4'>
              <form
                ref={form}
                onSubmit={sendEmail}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      name='user_name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='user_number'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='bg-[#121212] border-2 border-[#313131] rounded-lg p-3 flex'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='cursor-pointer hover:scale-105 w-full p-4 text-gray-100 mt-4 hover:bg-[#00bfff] ease-in duration-200'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <a href='/#home'>
            <div className='rounded-full shadow-lg shadow-gray-100 p-4 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='hover:text-[#00bfff]'
                size={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
