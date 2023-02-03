import { useRef } from 'react';
import Accordian from '@/components/Accordian/newAccordian';
import { IELTSAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';
import Head from 'next/head'
const CLASS_TIMING = [
    {
        day: 'Monday',
        time: '10:00AM-11:30AM'
    },
    {
        day: 'Wednesday',
        time: '1:00PM-2:30PM'
    },
    {
        day: 'Friday',
        time: '4:00PM-5:30PM'
    },
    {
        day: 'Saturday',
        time: '9:00AM-10:30AM'
    },
    {
        day: 'Sunday',
        time: '10:30AM-12:00AM'
    }
]

const IELTS = () => {
    const otpFormRef = useRef();

    // const openLeadForm = () => {
    //     otpFormRef.current.openPopup();
    // }

    // const handleExploreJobClick = () => {
    //     document.getElementById('batchesView').scrollIntoView();
    // }

    return (
        <>
            <Head>
                <title>Immigration to Canada | IELTS Demo Class - Keel </title>
                <meta content="Moving to Canada? | With industry standard practice material, regular doubt-solving sessions, 20+ IELTS tests, and more, crack your next IELTS exam | Keel " key="title" />
            </Head>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>Learn From The Top 0.01% IELTS Coaches In India
                            </h1>
                            <ul className="ieltsListBan">
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Live Classes</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />1:1 Session with experts</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />50,000+ hours of IELTS training experience</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Session Recordings</li>
                            </ul>
                            <GetConsultationCTA text="Book a Demo Class" />
                            <GetConsultationCTA ref={otpFormRef} hideText />
                            <div className='limitedSeats'>
                                <h4>Limited Seats Left!</h4>
                                <div className='certify'>
                                    <p>Certified by:</p>
                                    <img className='img-fluid' src='/assets/ielts.jpg' />
                                </div>
                            </div>
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid forWeb" src="/assets/ielts-header-desktop.webp" />
                            <img className="img-fluid forMobile" src="/assets/ielts-header.webp" />
                        </div>
                    </div>
                    {/* <div className="bannerLast">
                        <p>We are certified by:</p>
                        <div className="banImgsGrid">
                            <img src="/assets/cr1.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr2.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr3.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr4.webp" alt="" className="img-fluid" />
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Score 8,7,7,7 In 4 Weeks</h4>
                                <h5>Study Till The Time You Achieve Your Desired IELTS Band Score</h5>
                                <p>With industry standard practice material, regular doubt-solving sessions, 20+ IELTS tests, and much more, crack your next IELTS exam with Keel.
                                </p>
                            </div>
                        </div>
                        <div className='verticalMainCont customVerticalSection'>
                            <div className='verticalCarausalOuter customVerticalOuter'>
                                <div className="processStepCont">


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>A near-to-real classroom experience</h5>
                                            <p>Four weeks of knowledge packed conversations with Live classes, doubt resolution sessions and practice classes.</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Record. Watch. Learn. Repeat</h5>
                                            <p>Pre-recorded learning sessions to help you learn and grow at your convenience</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>90% score 8+ bands</h5>
                                            <p>Our streamlined way of teaching helps improve your band score and kickstarts your IELTS journey in the right direction.</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>PAN India community
                                            </h5>
                                            <p>Doubt clearance and one on one personalized IELTS strategy coaching sessions.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verticalImg'>
                                <img className='img-fluid' src='/assets/ielts-usp.webp' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid">
                        <p>"The Days Of Stressful And Confusing IELTS<br /> Preparation Are Finally Over!”
                        </p>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/ielts/online-class-ielts.webp" />
                        </div>
                        <div className="storyContent pl-30">
                            <ul className='newListing'>
                                <li><p>Flexible Batches</p></li>
                                <li><p>Live Classes</p></li>
                                <li><p>Expert Material</p></li>
                                <li><p>Academic & General Training</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid">
                        <p>“Take Out The Guesswork From Your Next IELTS Exam With Keel And Get Desired Results.”
                        </p>
                    </div>
                </div>
            </section>
            <section className="happyCustomers">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Customers</h4>
                        <h5>Happy <span>Customers</span></h5>
                        <p>Take Out The Guesswork From Your Next IELTS Exam With Keel And Get Desired Results. Listen to our happy Keelers.</p>
                    </div>
                    <div className="happyContent">
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>“I was stuck at 6.5 for a long time. Took IELTS 3 times and took coaching from the best names but couldn’t go above that. Keel Academy helped me get 9,8,8,7 in R,L,S,W in 4 weeks. The special sessions for test taking strategies are gold!”</p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Radha Gupta</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/divya-sharma.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>“As a working professional myself, it was a very hard to find time for preparation for IELTS. Weekend batches at Keel really helped me with this to finally get my desired score” </p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Trishansh Bansal</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/deep-saxena.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>“I always wanted to settle down in Canada but could not clear the IELTS after multiple attempts. I am lucky that I came across Keel’s amazing platform that cleared all my doubts and helped me fly with my dreams.”</p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Bhuvan Majji</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/deep-saxena.webp" />
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
                    <Accordian data={IELTSAccordianData} />
                </div>
            </section>
            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid customSubFoot">
                        <h4>Learn From The Top 0.01% IELTS Coaches In India​</h4>
                        <p>Fill in your details via this form, we will get back to you.</p>
                        <GetConsultationCTA text="Book a Demo Class" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default IELTS;