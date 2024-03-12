import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';

function Products(): JSX.Element {
    return (
        <div>
            <section>
                <Header />
                <section data-aos="fade-up" data-aos-duration="1000" className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full pl-[90px] pr-[90px] pb-[90px] pt-[40px]'}>
                    <div className="flex">
                        <div className="col w-full  ">
                            <div className="col w-full m-3 ">
                                <h1 className='text-xl font-extrabold ml-5 font-sans text-[#0BBA7B]'>PRODUCTS
                                </h1>
                                <h6 className='text-xl font-semibold ml-5 font-sans text-[#272932]'>Let’s discuss about your project.</h6>

                            </div>
                            <div className="col w-full">
                                <div className={'w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-3'} >

                                    {/* Card 01 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={product1} title="UTECH Blackbox Universal IIoT Gateway" alt="UTECH Blackbox Universal IIoT Gateway" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Blackbox Universal IIoT
                                                Gateway</h5>

                                            <p className="mb-3 font-normal text-gray-700 ">The UTECH BLACKBOX is an award-winning Industrial IoT Telematic Gateway that allows remote monitoring and control of plant and equipment, utilizing 4GLTE, WIFI, BLE, or Ethernet.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </a>





                                        </div>
                                    </div>

                                    {/* Card 02 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={product2} title="UTECH Trackbox Vehicle tracking Telematic Gateway"
                                            alt="UTECH Trackbox Vehicle tracking Telematic Gateway"
                                            className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Trackbox Vehicle
                                                    tracking Telematic Gateway</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">UTECH Trackbox is a GPS tracking device approved by TRCSL and Defense Ministry, providing fleet efficiency, safety, and theft reduction insights through multiple sensors and proprietary features.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 03 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer ">
                                        <img src={product3} title="UTECH Coollink Cold Chain monitoring IoT Gateway"
                                            alt="UTECH Coollink Cold Chain monitoring IoT Gateway"
                                            className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Coollink Cold Chain
                                                    monitoring IoT Gateway</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">UTECH Coollink is a cost-effective IIoT Gateway that monitors temperature and humidity in various settings, offering 4G LTE GSM connectivity, easy installation, and battery backup.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 04 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={product4} title="UTECH Smartnode Industry 4.0 Telematic Gateway"
                                            alt="UTECH Smartnode “Industry 4.0 Telematic Gateway"
                                            className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Smartnode “Industry 4.0”
                                                    Telematic Gateway</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">The UTECH Smartnode is a renowned Telematic Gateway for Industry 4.0, monitoring industrial manufacturing processors, ensuring production meets cost, quality, and time criteria, and communicating via WIFI mesh network.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 05 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={product5} title="UTECH Smart Energy Meter" alt="UTECH Smart Energy Meter" className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Smart Energy Meter</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">The UTECH Smart Energy Meter is a cost-effective IIoT device that remotely monitors system parameters, features a built-in gateway, battery backup, and temperature sensor.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 06 */}
                                    <div className="w-80  bg-white shadow-md rounded-xl shadow-md rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer">
                                        <img src={product6} title="UTECH Machine + Human (M+H) Telematic Gatewa"
                                            alt="UTECH Machine + Human (M+H) Telematic Gatewa"
                                            className={'w-[320px] mt-[5px] pl-5 pr-5'} />

                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UTECH Machine + Human (M+H)
                                                    Telematic Gateway</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">The UTECH M+H Telematic Gateway enhances manufacturing efficiency by connecting machine sensors and recording human ID, ensuring real-time data logging and alert capabilities for optimal factory operation.</p>
                                            <a href="#" className="inline-flex items-center px-3 text-sm font-medium text-center text-[#0BBA7B]">
                                                Download
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#0bba7b" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
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


export default Products
