import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Img1 from '../assets/About_Us_Img/cardImage1.png';
import Img2 from '../assets/About_Us_Img/dd.jpg'

function Aboutus(): JSX.Element {
    return (
      <div>
      <section>
          <Header />
          <div className='flex '>
            <div className='flex flex-col'>
            <h2 className='text-3xl text-green-500 font-semibold my-5 px-8 pt-10 flex-column'>ABOUT US</h2>
            <h1 className=' px-8 font-semibold my-3 text-5xl '>Empowering Innovation Through Exceptional<br/> Engineering Design and Consultancy</h1>
            <p className='px-8 text-3xl pt-7'>Primacy Design & Consultancy Inc. is a professional B2B<br/> solution provider specializing in organizational<br/> transformation, change management, and business <br />process improvement. They offer training, design, and <br /> consulting services for development, delivery, integration, <br /> and outsourcing, delivering exceptional results.</p>
            </div>
            <img src={Img1} className='flex-start'  alt="Logo" />
            </div>
            <h2 className='text-3xl text-green-500 font-semibold my-5 px-8 pt-10 flex-column'>MEET THE TEAM</h2>
            <div className='flex flex-row justify-center gap-8'>
            

              {/* card */}
              <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={Img2} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />


                            </div>

{/* card2 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={Img2} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />


                            </div>

{/* card3 */}

<div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={Img2} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />


                            </div>

{/* card4  */}

<div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={Img2} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />


                            </div>
          </div>
          <Footer/>
      </section>
  </div>
      );
  
  }
  
  
  export default Aboutus