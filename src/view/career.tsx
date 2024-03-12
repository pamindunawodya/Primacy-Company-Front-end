import React from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import careerPageImage from '../assets/careerPageImage.png'

function Career(): JSX.Element {
    return (
        <div>
            <section>
                <Header />
                <section data-aos="fade-up" data-aos-duration="1000" className={'grid grid-rows-1 grid-flow-col gap-3 w-full h-full p-[90px]'}>
                    <div className="flex">
                        <div className="col w-full ">
                            <img data-aos="zoom-in" data-aos-duration="500" src={careerPageImage} alt="careerPageImage" className={'w-[500px] mt-[50px] '} />

                        </div>
                        <div className="col w-full  ">
                            <div className="col w-full m-3 ">
                                <h1 className='text-xl font-extrabold ml-5 mt-[50px] font-sans text-[#0BBA7B]'>CAREER
                                </h1>

                            </div>
                            <div className="col w-full m-3 ">
                                <h6 className='text-xl font-semibold ml-5 mt-[25px]  font-sans text-[#272932]'>
                                    Discover Your Future: Join Primacy <br></br>Design and Consultancy Inc. Now!</h6>
                            </div>
                            <div className="col w-full m-3 ">
                                <h6 className='text-x font-normal ml-5 mt-[25px] font-sans text-[#272932]'>
                                    Primacy Design and Consultancy Inc. is seeking talented individuals to join their dynamic team, focusing on solving complex engineering challenges and delivering exceptional results for clients. The company offers opportunities to grow skills, collaborate with top professionals, and contribute to their mission of empowering innovation. </h6></div>
                        </div>

                    </div>
                </section>
                <Footer />
            </section>
        </div>
    );

}


export default Career
