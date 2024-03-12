import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';

const iframeStyle = {
    width: '30vw',
    height: '60vh',
    border: '2px',
    // Add more styles as needed
  };


function Contact(): JSX.Element {
    return (
      <div>
      <section>
          <Header />

           <div className='py-10 px-10 flex'>
                   <div className='flex flex-col'>
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d83347.10017169992!2d-123.15143519827005!3d49.246131677231865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e9!4m5!1s0x548676a92705d87d%3A0x41d74aabc721d568!2s4340%20Miller%20St%2C%20Vancouver%2C%20BC%20V5N%204A2%2C%20Canada!3m2!1d49.246161099999995!2d-123.0688643!4m5!1s0x548676a92705d87d%3A0x41d74aabc721d568!2s4340%20Miller%20St%2C%20Vancouver%2C%20BC%20V5N%204A2%2C%20Canada!3m2!1d49.246161099999995!2d-123.0688643!5e0!3m2!1sen!2slk!4v1710232795245!5m2!1sen!2slk"
                      style={iframeStyle}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      />
              </div>

          {/* Conatct Form */}

                  <div className='flex flex-col px-48  '>

                    <div className="w-[50rem]  ">
                       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[34rem]">
                         <div className="mb-4">
                           <label className="block text-gray-700 text-sm font-bold mb-2" >
                             Username
                           </label>
                           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                         </div>
                         <div className="mb-6">
                           <label className="block text-gray-700 text-sm font-bold mb-2" >
                             email
                           </label>
                           <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Email"/>

                         </div>

                         <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Message
                           </label>
                            <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Email"/>
                            </div>

                         <div className="flex items-center justify-between">
                            <div className="col w-full m-3 ">
                              <button type="button" className="before:ease  h-12 w-40    overflow-hidden  bg-[#0BBA7B] text-white shadow-xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#699082] hover:before:-translate-x-40 rounded-md">Submit</button>
                             </div>

                         </div>
                       </form>

                     </div>

                  </div>


              </div>
               <p className="text-center text-gray-500 text-xs">
                  &copy;2024 PRIMACY. All rights reserved.
                </p>

          <Footer/>
      </section>
  </div>
      );
  
  }
  
  
  export default Contact