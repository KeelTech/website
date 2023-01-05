import Accordian from '@/components/Accordian/newAccordian';
import { IELTSAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';


const IELTS = () => {

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>Achieve your desired score
                                <span> in 4 weeks</span>

                            </h1>
                            <ul className="ieltsListBan">
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Live Classes</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />1:1 Session with experts</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />50,000+ hours of IELTS training experience</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Session Recordings</li>
                            </ul>
                            <GetConsultationCTA text="Book a Demo Class"/>
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid forWeb" src="/assets/ielts-header-desktop.webp" />
                            <img className="img-fluid forMobile" src="/assets/ielts-header.webp" />
                        </div>
                    </div>
                    <div className="bannerLast">
                        <p>We are certified by:</p>
                        <div className="banImgsGrid">
                            <img src="/assets/cr1.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr2.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr3.webp" alt="" className="img-fluid" />
                            <img src="/assets/cr4.webp" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Score 8777 and more </h4>
                                <h5>Experience the joy of a real classroom</h5>
                                <p>With our well-curated class, we create an experience that is easy to follow</p>
                            </div>
                        </div>
                        <div className='verticalMainCont customVerticalSection'>
                            <div className='verticalCarausalOuter customVerticalOuter'>
                                <div className="processStepCont">


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Flexible Batches</h5>
                                            <p>Study in your peak focus hours and make the most of every class.</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Live Classes</h5>
                                            <p>Get your doubts resolved in real time by qualified mentors.</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Expert Material</h5>
                                            <p>Our study materials are curated by top 0.1% IELTS coaches in India</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn">

                                            <h5>Self-paced Classes</h5>
                                            <p>Learn at your own pace and comfort with an access to session recordings</p>
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
            <section className="batchesSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Batches</h4>
                        <h5>Upcoming IELTS <span>Batches</span></h5>
                        <p>Say goodbye to stressful and confusing IELTS preparations
                        </p>
                    </div>
                    <div className="batchesCarausal">
                        <div className="buttonGrid">
                            <button className="batchActBtn">IELTS Plus Course</button>
                            <button>Premium Course</button>
                        </div>
                        <div className="carsBatchCont">
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/admission.svg" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>Monday</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>10:00AM-11:30AM</p>
                                        </li>
                                    </ul>
                                    {/* <button>Join For Free</button> */}
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/admission.svg" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>Wednesday</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>1:00PM-2:30PM</p>
                                        </li>
                                    </ul>
                                    {/* <button>Join For Free</button> */}
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/admission.svg" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>Friday</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>4:00PM-5:30PM</p>
                                        </li>
                                    </ul>
                                    {/* <button>Join For Free</button> */}
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/admission.svg" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>Saturday</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>9:00AM-10:30AM</p>
                                        </li>
                                    </ul>
                                    {/* <button>Join For Free</button> */}
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/admission.svg" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>Sunday</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>10:30AM-12:00AM</p>
                                        </li>
                                    </ul>
                                    {/* <button>Join For Free</button> */}
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
                        <p>We help you get acquainted with IELTS before you attempt it. Here's what our happy KEELERS have to say.</p>
                    </div>
                    <div className="happyContent">
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>Hi team Keel! I'm really happy with the way they are thoroughly covering the basics of each section and then moving on to rigorous practice sessions. The doubt resolving sessions are especially helping me get better clearance. I am confident, I am going to get a good score. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Deep Saxena</h5>
                                                <button>Scored 8,8,7,7</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/deep-saxena.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>My experience with Keel has been great! The live sessions along with session recordings,  mock tests, and the practice material are well curated suited to each students’  needs. I loved the fact that they offered to provide a 1:1 session for the areas I need extra work on. I recently gave the test and got 8,8,7,7. Thank you team Keel for all the help. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Divya Sharma</h5>
                                                <button>Scored 8,7,7,8</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/divya-sharma.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>Thank you Keel for helping and guiding me to prepare for my IELTS exam. Just one month of dedicated classes worked wonders for me and helped me achieve an overall 8+ band in IELTs increasing my chances of getting an ITA in the next draw. Thank you team Keel.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Harsh Aggarwal</h5>
                                                <button>Scored 8,7,7,7</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/harsh-aggarwal.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>I would like to thank Keel for helping me achieve an overall score of 7.5 in just 3 weeks. Time was of an essence for my study abroad application and  the dedication of the team did not fail me. I recently got an admit from my dream University. Thank you team for  making  dreams reality for students.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Anushi Sen</h5>
                                                <button>Scored 8,7,7,7</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/anushi-sen.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>My experience with Keel was amazing. I loved the faculty from day one. I learnt about my improvement areas in the first week only thanks to a 1:1 session with Shreya ma’am. After that, it was just hard work and right guidance that helped me  achieve my desired score.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Neha Suri</h5>
                                                <button>Scored 8,7,8,7</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/neha-suri.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>The biggest challenge in front of me was how to prepare for IELTS with a 9 to 9 job. Keel gave me the much needed flexible weekend batch with pre-recorded sessions  that helped me learn at my pace. The doubt resolving sessions helped me make progress in my studies and within two months, not only I was able to score a good IELTS score but also filed for my Canada PR application with them. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Amit Vats</h5>
                                                <button>Scored 8,7,7,7</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/amit-vats.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>I had a great experience in my IELTS classes. The classes were interactive, fun and easy to understand. The faculty always resolved all our doubts with patience.</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Ruchi Gupta</h5>
                                                <button>Scored 8,7,7,8</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/ruchi-gupta.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="faqSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">FAQ</h4>
                        <h5>We are happy to <span>Help</span></h5>
                    </div>
                    <div className="accordionCont">
                        <div className="accrdTabs">
                            <button className="acrdTabAct">Section 1</button>
                            <button>Section 2</button>
                            <button>Section 3</button>
                        </div>
                        <div className="acrdnGridsCont">
                            {
                                FAQ_ACCORDION.map((val, index)=>{
                                    const { title, value } = val;
                                    return <Accordion title={title} value={value} index={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="faqSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">FAQ</h4>
                        <h5>We are happy to <span>Help</span></h5>
                    </div>
                    <Accordian data={IELTSAccordianData} />
                </div>
            </section>
        </>
    )
}

export default IELTS;