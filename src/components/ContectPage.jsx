import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContectPage = () => {
  const form = useRef();
  const [submitHandler, setSubmitHandler] = useState(false)
  // const service_id=process.env.REACT_APP_YOUR_SERVICE_ID
  // const template_id=process.env.REACT_APP_YOUR_TEMPLATE_ID
  // const public_key=process.env.REACT_APP_YOUR_PUBLIC_KEY


  // console.log(service_id
  //   , template_id
  //   , public_key
  // )

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xqk4kp9",
      "template_af68img",
      form.current,
      "hquoay_YGqlLOI6h0"
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='contact' className=' bg-stone-200 bg-opacity-50 rounded-3xl py-8  container min-h-80   w-full m-auto    p-4 sm:p-4 md:p-8 lg:p-12  ' >
      <h1 className=' font-extrabold text-4xl my-5 text-white'>Get in touch !!</h1>


      <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-4  font-medium '  >

        {/* <label>Name</label> */}
        <input type="text" name="to_name" className=' bg-stone-900 py-2  rounded-xl  outline-none text-neutral-300 text-lg px-4 placeholder:text-neutral-500  ' placeholder='name' />


        {/* <label>Email</label> */}
        <input type="email" name="from_name" className=' bg-stone-900 p-2  rounded-xl   outline-none text-neutral-300  text-lg px-4  placeholder:text-neutral-500  ' placeholder='xyz@email.com' />


        {/* <label>Message</label> */}
        <textarea name="message" className='md:col-span-2 lg:col-span-2 resize-none  bg-stone-900  rounded-xl h-40 outline-none text-neutral-300  text-lg px-4 py-2  placeholder:text-neutral-500  ' placeholder='hey ! ... nice portfolio' />


        <div className='flex items-center w-fit px-8 py-2  bg-pink-300 rounded-2xl font-bold  cursor-pointer  h-8 ' >
          {/* {!submitHandler ? */}
            
              <input type="submit" value="Send " className=' text-center  cursor-pointer text-black' onClick={() => setSubmitHandler(true)} />
            
            {/* // :
            // (
            //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            //     <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            //   </svg>
            // ) */}

          {/* } */}
        </div>

      </div>

    </form>
  );
};

export default ContectPage