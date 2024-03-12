import React, { useEffect } from 'react'
import Header from "../layout/header";
import Footer from '../layout/footer';
import HomePageImage from '../assets/HomePageImage.png';
import cardImage1 from '../assets/cardImage1.png';
import cardImage2 from '../assets/cardImage2.png';
import cardImage3 from '../assets/cardImage3.png';
import cardImage4 from '../assets/cardImage4.png';
import cardImage5 from '../assets/cardImage5.png';
import cardImage6 from '../assets/cardImage6.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
function Home(): JSX.Element {

    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <div>
            <section>
                <Header />
                <section className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full p-[90px]'}>
                    <div className="flex">
                        <div className="col w-full  ">
                            <div className="col w-full m-3 ">
                                <h1 className='text-3xl font-extrabold ml-5 mt-[50px] font-sans text-[#272932]'>The Global Leader in <br></br>
                                    Engineering Design &<br></br>
                                    Consultancy
                                </h1>

                            </div>
                            <div className="col w-full m-3 ">
                                <h6 className='text-xl font-semibold ml-5 mt-[25px]  font-sans text-[#272932]'>
                                    Engineering Solutions that Empower Your Future:<br></br> Unleashing Innovation and Excellence
                                </h6>
                            </div>
                            <div className="col w-full m-3 ">
                                <button type="button" className="before:ease  h-12 w-40 ml-5 mt-[15px]    overflow-hidden  bg-[#0BBA7B] text-white shadow-xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#699082] hover:before:-translate-x-40 rounded-md">Contact Us</button>
                            </div>
                            <div className="col w-full m-3 ">
                                <ul className="flex mt-5 ml-5 space-x-2">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>


                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col w-full " >
                            <img  data-aos="zoom-in"  data-aos-duration="500" src={HomePageImage} title="HomePageImage" alt="HomePageImage" className={'w-[500px] mt-[50px] '} />

                        </div>
                    </div>
                </section>
                <section data-aos="fade-up" data-aos-duration="1000"  className={'grid grid-rows-1 grid-flow-col' }>

                    <div   className='bg-gradient-to-b from-[#B7B7B7] to-white'>
                        <h1 className='text-2xl font-extrabold ml-5 mt-[50px] font-sans text-[#272932]'>Range of Services</h1>
                        <div className="col w-full m-3 ">
                            <h6 className='text-x font-semibold ml-5 font-sans text-[#272932]'>
                                Primacy Design and Consultancy Inc. offers innovative, cost-effective solutions to businesses, ensuring objectives are achieved<br></br>
                                while minimizing risk and maximizing efficiency</h6>
                        </div>
                        <div className={'w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-3'} >

                            {/* Card 01 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={cardImage1} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Product design and development</h5>
                                   
                                    <p className="mb-3 font-normal text-gray-700 ">Our primary objective is to develop innovative products for clients, encompassing consumer goods and industrial machinery.</p>
                                    <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 02 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={cardImage2} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mechanical engineering</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 ">We will offer clients mechanical engineering services, which involve designing and testing mechanical components, systems, and devices.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0BBA7B] ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 03 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                                <img src={cardImage3} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Electrical and electronics engineering</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 ">We will provide expertise in electrical and electronics engineering, including circuit design, power system design, and electronic device development.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0BBA7B] ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 04 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-5">
                                <img src={cardImage4} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Product design and development</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 ">Our primary objective is to develop innovative products for clients, encompassing consumer goods and industrial machinery.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0BBA7B]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 05 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-5">
                                <img src={cardImage5} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mechanical engineering</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 ">We will offer clients mechanical engineering services, which involve designing and testing mechanical components, systems, and devices.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0BBA7B] ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 06 */}
                            <div className="w-80  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-5">
                                <img src={cardImage6} title="Product design and development" alt="Product design and development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Electrical and electronics engineering</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 ">We will provide expertise in electrical and electronics engineering, including circuit design, power system design, and electronic device development.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0BBA7B] ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
              
                <Footer />
            </section>

        </div>
    );

}


export default Home
