import aboutus from '../assets/aboutus.png'
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { useEffect } from 'react';

function Aboutus(): JSX.Element {
    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <div>
            <section>
                <Header />
                <section data-aos="fade-up" data-aos-duration="1000" className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full p-[90px]'}>
                    <div className="flex">
                        <div className="col w-full  ">
                            <div className="col w-full m-3 ">
                                <h1 className='text-xl font-extrabold ml-5 mt-[50px] font-sans text-[#0BBA7B]'>ABOUT US
                                </h1>

                            </div>
                            <div className="col w-full m-3 ">
                                <h6 className='text-xl font-semibold ml-5 mt-[25px]  font-sans text-[#272932]'>
                                    Empowering Innovation Through Exceptional <br></br>Engineering Design and Consultancy</h6>
                            </div>
                            <div className="col w-full m-3 ">
                                <h6 className='text-x font-normal ml-5 mt-[25px] font-sans text-[#272932]'>
                                    Primacy Design & Consultancy Inc. is a professional B2B solution provider specializing in organizational transformation, change management, and business process improvement. They offer training, design, and consulting services for development, delivery, integration, and outsourcing, delivering exceptional results.  </h6></div>
                        </div>
                        <div className="col w-full ">
                            <img data-aos="zoom-in"  data-aos-duration="500"  src={aboutus}  alt="aboutus" className={'w-[500px] mt-[50px] '} />

                        </div>
                    </div>
                </section>

                <section  className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full pl-[90px] pr-[90px] pb-[90px] pt-[40px]'}>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='text-xl font-extrabold ml-5 mt-[50px] font-sans text-[#0BBA7B] mb-10'>MEET THE TEAM
                        </h1>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex  bg-white shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <a href="#">
                                    <img className="w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team1} alt="Dr. Edward Wong" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-500">
                                        <a href="#">Dr. Edward Wong</a>
                                    </h3>
                                    <span className="text-gray-500">Chief Executive Officer</span>
                                    <ul className="flex space-x-4 sm:mt-0">
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex  bg-white shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <a href="#">
                                    <img className="w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team2} alt="Dr. Chamera Karunanayake" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-500">
                                        <a href="#">Dr. Chamera Karunanayake</a>
                                    </h3>
                                    <span className="text-gray-500 ">VP Global Business Development</span>
                                    <ul className="flex space-x-4 sm:mt-0">
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex  bg-white shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                <a href="#">
                                    <img className="w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team3} alt="Asha Seneviratne" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-500">
                                        <a href="#">Asha Seneviratne</a>
                                    </h3>
                                    <span className="text-gray-500 ">Chief Finance Officer</span>
                                    <ul className="flex space-x-4 sm:mt-0">
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" items-center bg-gray-50 rounded-lg shadow sm:flex  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                                <a href="#">
                                    <img className="w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team4} alt="Janaka Liyanage" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-500">
                                        <a href="#">Janaka Liyanage</a>
                                    </h3>
                                    <span className="text-gray-500 ">Chief Technology Officer</span>
                                    <ul className="flex space-x-4 sm:mt-0">
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-500 hover:text-[#0BBA7B]">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <Footer />
            </section >
        </div >
    );

}


export default Aboutus