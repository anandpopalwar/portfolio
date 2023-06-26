import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContectPage = () => {
  const form = useRef();

  // const user_name = useRef();

  // const user_email = useRef()
  
  // const user_msg = useRef();

  // const submitValue = useRef()

  // console.log(user_email?.current?.value)



  // console.log(user_email.current.value)
  // console.log(user_msg.current.value)

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
        setSubmitHandler(true);

      }, (error) => {
        console.log(error.text);
      });
  };
  //  ref={user_name} ref={user_email}ref={user_msg}
  return (
    <form ref={form}
    
    onSubmit={      sendEmail } 
      
      id='contact' className=' bg-stone-200 bg-opacity-50 rounded-3xl py-8  container min-h-80   w-full m-auto    p-4 sm:p-4 md:p-8 lg:p-12  ' >
      {submitHandler &&

        <h1 className='text-center bg-stone-200 mx-auto my-8 text-green-500 font-semibold  rounded-lg py-2 flex  justify-center' >messege send successfully<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        </h1>
  

      }

      <h1 className=' font-extrabold text-4xl my-5 text-white'>Get in touch !!</h1>


      <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-4  font-medium '  >

        {/* <label>Name</label> */}
        <input type="text" name="to_name"  className=' bg-stone-900 py-2  rounded-xl  outline-none text-neutral-300 text-lg px-4 placeholder:text-neutral-500  ' placeholder='name' />


        {/* <label>Email</label> */}
        <input type="email" name="from_name"    className=' bg-stone-900 p-2  rounded-xl   outline-none text-neutral-300  text-lg px-4  placeholder:text-neutral-500  ' placeholder='xyz@email.com' />


        {/* <label>Message</label> */}
        <textarea name="message"   className='md:col-span-2 lg:col-span-2 resize-none  bg-stone-900  rounded-xl h-40 outline-none text-neutral-300  text-lg px-4 py-2  placeholder:text-neutral-500  ' placeholder='hey ! ... nice portfolio' />


        <div className='flex items-center w-fit px-8 py-2  bg-pink-300 rounded-2xl font-bold  cursor-pointer  h-8 ' >
        {

          
          !submitHandler ?
          <input type="submit" value="Send "  className=' text-center  cursor-pointer text-black'   />
          :
          <input type="submit" value="sent successfully "  className=' text-center  cursor-pointer text-black' />

          
        } 
        </div>

      </div>

    </form>
  );
};

export default ContectPage