import React, { useRef } from 'react';
import Image from "next/image";
import BlogNewView from '@/components/BlogsView/BlogNewView';
import GetConsultationCTA from '@/components/GetConsultationCTA';

const Home = ({blogsList})=>{

    const otpFormRef = useRef();

    const openLeadForm = ()=>{
        otpFormRef.current.openPopup();
    }

    return(
        <>
            <section className="services">
            <GetConsultationCTA ref={otpFormRef} hideText lead_origin='homepage'/>
                <div className="container">
                    <div className="servicesCont">
                        <div className="storyContent customService">
                            <h4 className="grdHdng">Offerings</h4>
                            <h5>What do you <span>want to do?</span></h5>
                            <p>Our team at Keel is obsessed with making your journey a smooth ride. We are committed to be there with you every step of the way.</p>
                        </div>
                        <div className="serviceSlider" onClick={openLeadForm}>
                            <div className="srvcGrid">
                                <h5>Discovery call</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                            <div className="srvcGrid grdntTwo">
                                <h5>Career counselling</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                            <div className="srvcGrid gdntThird">
                                <h5>University/college shortlisting</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width text-center">
                                <h4 className="grdHdng">Process</h4>
                                <h5>The <span>Process</span></h5>
                                <p>Take a flight with Keel and land at your dream university</p>
                            </div>
                        </div>
                        <div className='midScrollCont'>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Research and Discovery</h5>
                                            <p>Keel helps you explore the best courses and universities to kickstart your dream career</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                    <Image
                                        src="/assets/home/home-process-1.webp" 
                                        alt="process"
                                        width={305}
                                        height={148}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                        {/* <img className='img-fluid' src='/assets/home/home-process-1.webp' /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                    <Image
                                        src="/assets/home/home-process-2.webp" 
                                        alt="process"
                                        width={305}
                                        height={148}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                        {/* <img className='img-fluid' src='/assets/home/home-process-2.webp' /> */}
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Career guidance from the top 1%</h5>
                                            <p>Get mentored by leading industry experts from companies like Uber, Microsoft, Deloitte</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>Take all the right steps</h5>
                                            <p>We help in optimizing your profile as per international standards that helps you stand out</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                    <Image
                                        src="/assets/home/home-process-3.webp" 
                                        alt="process"
                                        width={305}
                                        height={148}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                        {/* <img className='img-fluid' src='/assets/home/home-process-3.webp' /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-4.webp' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Be on top of the game</h5>
                                            <p>With our guidance throughout the process, your scores and application will be toough to beat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='verticalMainCont'>
                            <div className='verticalCarausalOuter'>
                                <div className="processStepCont">
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Research and Discovery</h5>
                                            <p>Explore your options: In terms of right courses, Universities, country and so on.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Career guidance from the top 1%</h5>
                                            <p>Choose your path: After talking to mentors from Google, Uber, Microsoft and more.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>Take all the right steps </h5>
                                            <p>Start your Journey: By creating a profile that showcases your best self.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Test preparations and submitting the application</h5>
                                            <p>Say hi to your dream life: By getting your desired scores and filing an application that stands out.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verticalImg'>
                                <img className='img-fluid' src='/assets/ver.webp' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="customer">
                <div className="customerCont">
                    <div className="container">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Customers</h4>
                            <h5>Happy <span>Keelers</span></h5>
                            <p>Our team at Keel works day and night to make our students’ dreams come true. Hear what they have to say about us.</p>
                        </div>
                    </div>
                    <div className="custCarusalCont">
                        {/* <Image
                            src="/assets/quote.svg" 
                            alt="user review"
                            width={213}
                            height={243}
                            loading="lazy"
                            className="quoteImg img-fluid"
                        /> */}
                        <img className="quoteImg img-fluid" src="/assets/quote.svg" alt="logo"/>
                        <div className="leftCrData">
                            <h4>Thousands of Happy Clients across the globe!</h4>
                        </div>
                        <div className="caraCustMain">
                            {/* <Swiper
                                spaceBetween={15}
                                slidesPerView={1.2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            > */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <Image
                                        src="/assets/sheetal-mehta.webp" 
                                        alt="user review"
                                        width={90}
                                        height={90}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                    {/* <img className="img-fluid" src="/assets/sheetal-mehta.webp" /> */}
                                    <div className="usrNames">
                                        <h5>Sheetal Mehta</h5>
                                        <p>Migrated to Canada</p>
                                    </div>
                                </div>
                                <p>It was always my dream to study abroad and build a life there. A friend recommended me to Keel and it was a smooth sail from there. They made the whole process fairly simple and transparent for me. Thank you team Keel.</p>
                            </div>
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <Image
                                        src="/assets/rajat-gupta.webp" 
                                        alt="user review"
                                        width={90}
                                        height={90}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                    {/* <img className="img-fluid" src="/assets/rajat-gupta.webp" /> */}
                                    <div className="usrNames">
                                        <h5>Rajat Gupta</h5>
                                        <p>Migrated to Australia</p>
                                    </div>
                                </div>
                                <p> My study abroad application was rejected twice and I just could not afford another rejection. Just then, I came across Keel through a friend and they helped me with each and every step. I have finally got admission in my dream university. Sky's the limit for me now. </p>
                            </div>
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <Image
                                        src="/assets/ruchi-parmar.webp" 
                                        alt="user review"
                                        width={90}
                                        height={90}
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                    {/* <img className="img-fluid" src="/assets/ruchi-parmar.webp" /> */}
                                    <div className="usrNames">
                                        <h5>Ruchi Parmar</h5>
                                        <p>Migrated to UK</p>
                                    </div>
                                </div>
                                <p>After my +2, I was so confused about everything. I knew I wanted to study abroad but there were just too many questions. Which course? Which country? Which University?  Keel helped me with all my questions and also helped me make fast decisions. Thank you team Keel for giving me the right kickstart. </p>
                            </div>
                            {/* </SwiperSlide> */}

                            {/* </Swiper> */}
                        </div>
                    </div>
                </div>
            </section>
            <BlogNewView blogsList={blogsList} showHighlighted />
        </>
    )
}

export default Home;