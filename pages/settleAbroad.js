// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Accordian from '@/components/Accordian/newAccordian';
import { SettleAbroadAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
const SettleAbroad = () => {

    const [selectedTab, setActiveTab]=React.useState('3')

    const otpFormRef = React.useRef();

    const openLeadForm = ()=>{
        otpFormRef.current.openPopup();
    }

    const handleClick=(val)=>{
        setActiveTab(val);
        openLeadForm();
    }
    return (
        <>
            <section className="studyBannerSection">
            <GetConsultationCTA ref={otpFormRef} hideText lead_origin='settleAbroad'/>
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1><span>World’s No.1 Customer-friendly </span>
                                Canada Immigration platform
                            </h1>
                            <p>We are a first-of-its-kind tech enabled team of Licensed Immigration Consultants obsessed with making your Canada dream come true.</p>
                            <GetConsultationCTA lead_origin='settle' />
                        </div>
                        <div className="studyBanImg">
                            {/* <img className="img-fluid" src="/assets/studyabroad.webp" /> */}
                            <img className="img-fluid" src="/assets/settle-abroad-hero-web.webp" alt='abroad' />
                        </div>
                    </div>
                    <div className="bannerLast">
                        <p>Our customers successfully migrated to Canada from these countries</p>
                        <div className="banImgsGrid">
                            <img src="/assets/flg5.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg1.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg2.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg3.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg4.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg7.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg6.webp" alt="flag" className="img-fluid" />
                            <img src="/assets/flg8.webp" alt="flag" className="img-fluid" />
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
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='vtr' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='vtr' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='view' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='view' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='view' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" alt='university' />
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
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" alt='view' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className="seeAllBtn">See All <img className="img-fluid" src="/assets/vtR.webp" alt='view' /></button> */}
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Plans</h4>
                                <h5>Our Services</h5>
                                <p>If you have the will to get into your dream university, we have a way to make it happen.</p>
                            </div>
                        </div>
                        <div className='plansContainer'>
                            <div className='plansOuter'>
                            
                                <h4>Profile Review</h4>
                                <div className='plnPrc'>
                                    <p><sup>₹</sup>8999</p>
                                    <span>₹13000</span>
                                </div>
                                <button className={selectedTab==='1'?'pngChose rcmndBtn':'pngChose'} onClick={()=>handleClick('1')}>Choose This Plan</button>
                                <ul>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Immigration Expert profile review</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Express entry profile submission</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>PNP application submission</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Easy EMI</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>WhatsApp Updates</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Profile gap identification</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ADR identification</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Priority Documentation</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Dedicated Account Manager</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Response to ITA</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ECA</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>IELTS classes</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Keel Elite Membership</p></li>
                                </ul>
                            </div>
                            <div className='plansOuter'>
                            
                                <h4>Express Entry Profile Submission</h4>
                                <div className='plnPrc'>
                                    <p><sup>₹</sup>29,999</p>
                                    <span>₹69,999</span>
                                </div>
                                <button className={selectedTab==='2'?'pngChose rcmndBtn':'pngChose'} onClick={()=>handleClick('2')}>Choose This Plan</button>
                                <ul>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Immigration Expert profile review</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Express entry profile submission</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>PNP application submission</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Easy EMI</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>WhatsApp Updates</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Profile gap identification</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ADR identification</p></li>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Priority Documentation</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Dedicated Account Manager</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Response to ITA</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ECA</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>IELTS classes</p></li>
                                    <li className='unavlPlans'><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Keel Elite Membership</p></li>
                                </ul>
                            </div>
                            <div className='plansOuter '>
                                    <div className='recomndedOut'>
                                        <p>Recommended</p>
                                    </div>
                                
                                <h4>White Glove</h4>
                                <div className='plnPrc'>
                                    <p><sup>₹</sup>89,999</p>
                                    <span>₹129,999</span>
                                </div>
                                <button className={selectedTab==='3'?'pngChose rcmndBtn':'pngChose'} onClick={()=>handleClick('3')}>Choose This Plan</button>
                                <ul>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Immigration Expert profile review</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Express entry profile submission</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>PNP application submission</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Easy EMI</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>WhatsApp Updates</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Profile gap identification</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ADR identification</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Priority Documentation</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Dedicated Account Manager</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Response to ITA</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>ECA</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>IELTS classes</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Keel Elite Membership</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Immigrate To Canada</h4>
                                <h5>All in one Immigration Application Platform</h5>
                                <p>Keel connects you with Canada’s best licensed immigration consultants.</p>
                            </div>
                        </div>
                        <div className='verticalMainCont customVerticalSection'>
                            <div className='verticalCarausalOuter customVerticalOuter'>
                                <div className="processStepCont">


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Only Licensed Consultants</h5>
                                            <p>No more ghost consultants ghosting you!</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Best advice delivered at home</h5>
                                            <p>Don't Settle for the consultant "near you"</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Your Money Is Precious</h5>
                                            <p>Know your chances before starting your application</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Don't Run For Updates For Months</h5>
                                            <p>End to end application management at one platform</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verticalImg hideMobile'>
                                <img className='img-fluid' src='/assets/ildt.webp' alt='ildt' />
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
                                <p>Make your Canada immigration journey hassle-free with Keel’s tech enabled streamlined immigration process. </p>
                            </div>
                        </div>
                        <div className='midScrollCont'>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Check your eligibility</h5>
                                            <p>Find out which migration route would work best for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/check_your_eligibility.webp' alt='eligibility' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/connect_wiith_a_licensed_consultant.webp' alt='consultant' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Connect with a Licensed Consultant</h5>
                                            <p>Our Licensed Immigration Consultants help you explore the legal process of immigration and ensure a risk-free experience.</p>
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
                                            <p>Get your desired IELTS score with the help of the top 0.01% of IELTS coaches in India.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/ielts_preparation.webp' alt='ielts' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/work_with_a_dedicated_team.webp' alt='work with team' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Work with a dedicated team</h5>
                                            <p>And let them do all the heavy-lifting in your file preparation.</p>
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
                                            <p>Our Licensed Immigration Consultants prepare and file your application on your behalf.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/submit_the_application.webp' alt='application' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/settleAbroad/start_a_new_life.webp' alt="start" />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 6</span>
                                            <h5>Start a new life </h5>
                                            <p>Kickstart your dream life in Canada and get support from a ready-to-help community.</p>
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
                        <p>Here’s what our family of happy Keelers have to say about us!</p>
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/vignesh-macharla.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/durgesh-kumar.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/ronit-kakkar.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/chanak-gupta.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/sanjay-kulkarni.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/tanu-kasal.webp" alt='user image' />
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
                                            <img className="img-fluid hpyRht" src="/assets/settleAbroad/rakesh-shivhare.webp" alt='user image' />
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
                    <Accordian data={SettleAbroadAccordianData} />
                </div>
            </section>
        </>
    )
}

export default SettleAbroad;