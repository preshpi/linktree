import React, { useState } from 'react'

function Contact() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit=(e) => {
    e.preventDefault();
    if(firstName.length===0||lastName.length===0||email.length===0||message.length===0||check.length===0){
      setError(true)
    }
    if(firstName&&lastName&&email&&message&&check){
      console.log("first Name:",firstName,"\nLast Nmae:", lastName, "\nEmail:", email,"\nMessage:", message, check); 
    }
   
  }
  return (
    <div className="grid lg:place-items-center  h-screen items-center justify-center">
      <div className="m-5">
        <h1 className="text-start mb-3 header">Contact Me</h1>
        <p className="text-start text mt-3 lg:w-full md:w-[375px] text-xl font-normal">Hi there, contact me to ask about anything you have in mind.</p>
      
          <form onSubmit={handleSubmit} className="mt-8">

          <div className="grid lg:grid-cols-2 lg:gap-5">
            <div>
              <label for="first_name" className="name">First name</label>
              <input className={error&& firstName.length<=0 ? 'inputname mt-3 w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]' : 'inputname mt-3 w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#F83F23] border border-[#D0D5DD]' } />
            {/* {error&& firstName.length<=0 ?  <input onChange={e=>setFirstname(e.target.value)} className="inputname mt-3 w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]" id="first_name" placeholder='Enter your first name'/> : "focus:border-[#F83F23]"} */}
             {error&& firstName.length<=0 ? <p class="hint2 mt-2">Please enter your firstname</p> : ""}
            </div>

            <div>
              <label for="last_name" className="name">Last name</label>
              <input onChange={e=>setLastname(e.target.value)}  className="inputname mt-3  w-[343px] lg:w-[348px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]" id="last_name" placeholder='Enter your last name'/>
              {error&& lastName.length<=0 ? <p class="hint2 mt-2">Please enter your lastname</p> : ""}
            </div>
          </div>

          <div className="mt-3">
            <label className="name" for="email">Email</label>
            <input onChange={e=>setEmail(e.target.value)}  className="emailinput  w-[343px] lg:w-[720px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]" id="email" placeholder="yourname@email.com"/>
            {error&& email.length<=0 ? <p class="hint2 mt-2">Please enter your email</p> : ""}
          </div>

          <div className="mt-3">
            <label className="name" for="message">Message</label>
            <textarea onChange={e=>setMessage(e.target.value)}  className="messageinput mt-3 w-[343px] lg:w-[720px] focus:outline-none focus:ring focus:border-[#84CAFF]  border border-[#D0D5DD]" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            {error&& message.length<=0 ?  <p class="hint2 mt-2">Please enter a message</p> : ""}
          </div>

          <div className="mt-3">
            <input onChange={e=>setCheck(e.target.value)} type="checkbox" id="text" className="checkbox mx-2 ring-opacity-25  focus:ring-2 ring-[#84CAFF] focus:border-[#84CAFF]   border border-[#D0D5DD] focus:outline-none"/>
            <label  for="text lg:w-[688px] w-[311px] mb-5">You agree to providing your data to "name" who may contact you.</label>
            {error&& check.length<=0 ?  <p class="hint2 mt-2">check the box</p> : ""}
          </div>

          <div>
            <button id="btn__submit" className="mt-3 w-[343px] lg:w-[720px] bg-[#1570EF] hover:bg-[#B2DDFF] ring-opacity-25  focus:ring-4 ring-[#84CAFF]">Send message</button>
          </div>

          </form>
      </div>


      <footer className="mt-auto">
        <hr className="border-1 border-gray-300 lg:w-[1152px] w-[343px] grid place-items-center mx-5 mt-5"/>

        <div className="grid lg:flex md:flex gap-5 lg:w-[1152px] md:w-[600px] w-[343px] justify-between mt-5 p-8">
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666869157/Vector_h3cvpj.png" alt="zurilogo" className="i4gg mt-5"/>
         <h1 className="text-[#667085] hng items-center justify-center grid mt-3">HNG Internship 9 Frontend Task</h1>
         <div className="flex items-center">
          <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666714039/I4G_qvbdlk.png" alt="I4Glgo" className="i4g"/>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact