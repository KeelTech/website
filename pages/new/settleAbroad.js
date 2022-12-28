// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Accordian from '@/components/Accordian/newAccordian';
import { SettleAbroadAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';

// Import Swiper styles
import 'swiper/css';
const SettleAbroad = () => {

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1><span>World’s most customer friendly </span>
                            Canada Immigration platform
                            </h1>
                            <p>We are a first-of-its-kind tech enabled team of Licensed Immigration Consultants obsessed with making your Canada dream come true. </p>
                            <GetConsultationCTA/>
                        </div>
                        <div className="studyBanImg">
                            {/* <img className="img-fluid" src="/assets/studyabroad.webp" /> */}
                            <img className="img-fluid" src="/assets/settle-abroad-hero-web.webp" />
                        </div>
                    </div>
                    <div className="bannerLast">
                        <p>Our customers successfully migrated to Canada from these countries</p>
                        <div className="banImgsGrid">
                            <img src="/assets/flg5.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg1.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg2.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg3.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg4.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg7.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg6.webp" alt="" className="img-fluid" />
                            <img src="/assets/flg8.webp" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="universitiesSection d-none">
                <div className="container">
                    <div className="universitiesCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Universities</h4>
                            <h5><span>Top Universities & Colleges </span>to Study Abroad Exist</h5>
                            <p>We believe with right exposure you can do wonders for yourself and your family hence we help you
                                make choices that</p>
                        </div>
                        <div className="formInputMain studyInputs">
                            <div className="inputForm">
                                <input type="text" />
                                <label>Full Name</label>
                            </div>
                            <div className="inputForm">
                                <input type="email" />
                                <label>Email</label>
                            </div>
                            <div className="inputForm">
                                <input type="email" />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="universitiesGridCont">
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className="seeAllBtn">See All <img className="img-fluid" src="/assets/vtR.webp" /></button> */}
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Score 8777 and more </h4>
                                <h5>Near-to-real classroom experience </h5>
                                <p>We believe with right exposure you can do wonders for yourself and your family hence we help you make choices that</p>
                            </div>
                        </div>
                        <div className='verticalMainCont customVerticalSection'>
                            <div className='verticalCarausalOuter customVerticalOuter'>
                                <div className="processStepCont">


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Licensed Consultants only</h5>
                                            <p>To guide you through the process </p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Timely updates</h5>
                                            <p>To keep you informed on the progress of your Canada PR application </p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Precise filing</h5>
                                            <p>Means less chances of rejection </p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Stress-free</h5>
                                            <p>A transparent immigration process to guide you through the process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verticalImg hideMobile'>
                                <img className='img-fluid' src='/assets/ildt.webp' />
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
                                <p>Take out the stress from your Canada immigration journey with Keel’s tech enabled streamlined immigration process. </p>
                            </div>
                        </div>
                        <div className='midScrollCont'>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Check your eligibility</h5>
                                            <p>To find out which migration route would work best for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-1.webp' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-2.webp' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Connect with a Licensed Consultant</h5>
                                            <p>Connect with our Licensed Immigration Consultant and understand the immigration process.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>IELTS preparation</h5>
                                            <p>Get your desired IELTS score with the help of the top 0.01% of IELTS coaches in India. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-3.webp'/>
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
                                            <h5>Work with a dedicated team</h5>
                                            <p>And let them do all the heavy-lifting in your file preparation. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 5</span>
                                            <h5>Submit the application </h5>
                                            <p>Our Licensed Immigration Consultants prepare and file your application on your behalf. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-3.webp'/>
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
                                            <span className="stepNum">Step 6</span>
                                            <h5>Start a new life </h5>
                                            <p>Start your dream life in Canada and get support from a ready-to-help community.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="happyCustomers">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Customers</h4>
                        <h5>Happy <span>Keelers</span></h5>
                        <p>We believe with right exposure you can do wonders <br />for yourself and your family hence we help
                            you make choices that</p>
                    </div>
                    <div className="happyContent">
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>After going to multiple “experts,” checking multiple websites and spending hundreds of hours on research, I realised that Keel gave me more clarity in just 15 minutes about Canada PR process. The thing I loved about them is that they were genuinely trying to help and were not trying to hard sell unrealistic dreams to me. I am going to recommend them to my friends and family for sure. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Vignesh Macharla</h5>
                                                <button>Engineer</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/vignesh-macharla.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>They keeled it in the preliminary 15 minutes session only. I fell in love with the way their Licensed Consultant explained everything to me. The best part is that in just 999/- I got a  sense of how my Canada PR journey would look like and what ROI I can expect if I decide to go with Keel. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Durgesh Kumar</h5>
                                                <button>Doctor</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/durgesh-kumar.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>I am extremely happy that I found Keel for my Canada PR process. Their 360 degree assistance package hand-holds you throughout the process. Right from preparing for IELTS to settling in Canada and finding a job, Keel makes sure that they are there to help in every step of the process. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Ronit Kakkar</h5>
                                                <button>Investor</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/ronit-kakkar.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>I decided to go with Keel with a lot of apprehension because I had a bad experience with a consultant before. With a  rejected visa, my case was very delicate. But the way Keel handled  everything, it made me a lot less nervous and a lot more confident  about getting Canada PR in the near future.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Chanak Gupta</h5>
                                                <button>Nurse</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/chanak-gupta.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>After hearing horrifying stories from friends and family about the shady consultants in India, I was delaying my Canada PR process for the longest time because I had no clue who to trust. Enter Keel. In just a 15 minutes session with a Licensed immigration consultant, I knew I had found the right immigration company for my Canada PR.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Sanjay Kulkarni</h5>
                                                <button>Architect</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/sanjay-kulkarni.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>Looking for someone you can trust with closed eyes for your Canada PR? Keel is your go to immigration company. With their Licensed Consultant only policy, I never got advice from a novice or an unlicensed consultant. Their unlimited chat support makes your Canada PR process a smooth sail.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Tanu Kasal</h5>
                                                <button>Doctor</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/tanu-kasal.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>Where there is a will to move to Canada, there is a way provided by Keel. With 80 different immigration programs available for you, you are bound to get confused and overwhelmed. However, in the first 15 minutes, Keel helped me crack the code. After that, I knew I had to hire them for my Canada PR journey.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Rakesh Shivhare</h5>
                                                <button>Business Man</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/rakesh-shivhare.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">FAQ</h4>
                        <h5>We are happy to <span>Help</span></h5>
                    </div>
                    <Accordian data={SettleAbroadAccordianData}/>
                </div>
            </section>
        </>
    )
}

export default SettleAbroad;