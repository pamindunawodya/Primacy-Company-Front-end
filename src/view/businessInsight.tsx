import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';
import offer4 from '../assets/offer4.png';
import offer5 from '../assets/offer5.png';
import offer6 from '../assets/offer6.png';
function BusinessInsight(): JSX.Element {
    return (
        <div>
            <section>
                <Header />
                <section data-aos="fade-up" data-aos-duration="1000" className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full pl-[90px] pr-[90px] pb-[90px] pt-[40px]'}>
                    <div className="flex">
                        <div className="col w-full  ">
                            <div className="col w-full m-3 ">
                                <h1 className='text-xl font-extrabold ml-5 font-sans text-[#0BBA7B]'>WHAT WE OFFER
                                </h1>
                                <h6 className='text-xl font-semibold ml-5 font-sans text-[#272932]'>Explore Primacy Design & Consultancy</h6>

                            </div>
                            <div className="col w-full">
                                <div className={'w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-3'} >

                                    {/* Card 01 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={offer1} title="E-Commerce" alt="E-Commerce" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">E-Commerce</h5>
                                        </div>
                                    </div>

                                    {/* Card 02 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={offer2} title="Ships Energy Solution" alt="Ships Energy Solution" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Ships Energy Solution</h5>
                                            </a>

                                        </div>
                                    </div>

                                    {/* Card 03 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer ">
                                        <img src={offer3} title="Electrical Engineering" alt="Electrical Engineering" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Electrical Engineering</h5>
                                            </a>

                                        </div>
                                    </div>

                                    {/* Card 04 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={offer4} title="Software Testing and Firmware Development" alt="Software Testing and Firmware Development" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Software Testing and Firmware Development</h5>
                                            </a>
                                            
                                        </div>
                                    </div>

                                    {/* Card 05 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={offer5} title="Computer Security" alt="Computer Security" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Computer Security</h5>
                                            </a>

                                        </div>
                                    </div>

                                    {/* Card 06 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={offer6} title="Medical Imaging" alt="Medical Imaging" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Medical Imaging</h5>
                                            </a>
                                            
                                        </div>
                                    </div>

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


export default BusinessInsight
