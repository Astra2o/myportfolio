import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceid="----------";       //copy  from email.js website service 
    const templateid="---------";    // copy tamplete id  --------------
    const publicid='-------';     // copy public id of your form email.js

    emailjs.sendForm(serviceid,templateid, form.current, {
      publicKey: publicid,
    }).then(
      () => {
        console.log('SUCCESS!');
        toast.success('Your details have been submitted. We will contact you shortly.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Unable to submit data, try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    );

    // Reset form after submission
    setFormData({ from_name: '', from_email: '', from_subject: '', message: '' });
  };

  return (
    <div  id='contact' className='w-full flex min-h-screen pt-9 flex-col items-center lg:flex-row justify-center bg-zinc-900'>
      <div className="lg:w-1/2 lg:px-28">
        <h1 className='italic text-5xl mb-10'>
          Contact Me
        </h1>
        <form ref={form} className="form flex lg:ml-10 flex-col gap-8" onSubmit={handleSubmit}>
          <input
            className='border border-zinc-100 rounded-xl bg-zinc-900 px-2 py-1'
            placeholder='Name'
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            className='border border-zinc-100 rounded-xl bg-zinc-900 px-2 py-1'
            placeholder='Email'
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <input
            className='border border-zinc-100 focus:border-[#CDEA68] rounded-xl bg-zinc-900 px-2 py-1'
            placeholder='Subject'
            type="text"
            name="from_subject"
            value={formData.from_subject}
            onChange={handleChange}
            required
          />
          <textarea
            className='border rounded-xl border-zinc-100 bg-zinc-900 px-2 py-1'
            placeholder='Query'
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
          <button type="submit" className='bg-[#CDEA68] inline-flex w-fit rounded-full py-2 px-6 text-zinc-800 text-xl border border-r-full'>
            Contact
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 m-10">
        <div className="flex flex-col lg:flex-row md:justify-between">
          <div className="left mt-8">
            <h2 className='text-2xl'>Touch with us:</h2>
            <ul>
              <li><a className='flex flex-row gap-3 mt-2' href=""><img className='w-6 h-6' src="/images/linkedin.png" alt="" /> linkedin.com/in/aman-pal-957b16217</a></li>
              <li><a className='flex flex-row gap-3 mt-2' href=""><img className='w-6 h-6' src="/images/github.png" alt="" />github.com/Astra2o</a></li>
              <li><a className='flex flex-row gap-3 mt-2' href=""><img className='w-6 h-6' src="/images/insta.png" alt="" />github.com/Astra2o</a></li>
            </ul>
          </div>
          <div className="right mt-8">
            <ul>
              <li className='flex flex-row gap-3 mt-2'>
                <img className='w-6' src="/images/email.png" alt="" />
                amanpardhansambhalkha@gmail.com
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <img className='w-6' src="/images/phone.png" alt="" />
                +91 8607227118
              </li>
              <li className='flex flex-row gap-3 mt-2'>
                <img className='w-6 h-6' src="/images/locate.png" alt="" />
                Ambala Cantt,<br /> Haryana, India 133101
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
