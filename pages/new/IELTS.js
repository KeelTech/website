import { useState } from 'react';
import { FAQ_ACCORDION } from '@/helpers/constant.js';

const Accordion = ({title, value, index})=>{
    const [active, setActive] = useState(false);

    return (
        <div className={`acrdGrd ${active?'acrdAct':''}`} key={index}>
        <h3 onClick={()=>setActive(val=>!val)}>{title}
            <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
        </h3>
        <p>{value}</p>
    </div>
    )
}

const IELTS = () => {

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>Achieve your desired score
                                <span>in 4 weeks</span>

                            </h1>
                            <ul className="ieltsListBan">
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Live Classes</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />1:1 Session with experts</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />50,000+ hours of IELTS training experience</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Session Recordings</li>
                            </ul>
                            <button>Book a Demo Class</button>
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid forWeb" src="/assets/name.png" />
                            <img className="img-fluid forMobile" src="/assets/ielts.png" />
                        </div>
                    </div>
                    <div className="bannerLast">
                        <p>We are certified by:</p>
                        <div className="banImgsGrid">
                            <img src="/assets/cr1.png" alt="" className="img-fluid" />
                            <img src="/assets/cr2.png" alt="" className="img-fluid" />
                            <img src="/assets/cr3.png" alt="" className="img-fluid" />
                            <img src="/assets/cr4.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="batchesSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Batches</h4>
                        <h5>Upcoming IELTS <span>Batches</span></h5>
                        <p>The Days Of Stressful And Confusing IELTS Preparation Are Finally Over!
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
                                    <img className="img-fluid" src="/assets/batch.png" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>25 Aug 2022 (Thursday)</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>2:00PM-3:00PM</p>
                                        </li>
                                    </ul>
                                    <button>Join For Free</button>
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/batch.png" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>25 Aug 2022 (Thursday)</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>2:00PM-3:00PM</p>
                                        </li>
                                    </ul>
                                    <button>Join For Free</button>
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/batch.png" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>25 Aug 2022 (Thursday)</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>2:00PM-3:00PM</p>
                                        </li>
                                    </ul>
                                    <button>Join For Free</button>
                                </div>
                            </div>
                            <div className="batchGrids">
                                <div className="batchInner">
                                    <img className="img-fluid" src="/assets/batch.png" />
                                    <ul>
                                        <li>
                                            <img className="img-fluid" src="/assets/calendar.svg" />
                                            <p>25 Aug 2022 (Thursday)</p>
                                        </li>
                                        <li>
                                            <img className="img-fluid" src="/assets/time.svg" />
                                            <p>2:00PM-3:00PM</p>
                                        </li>
                                    </ul>
                                    <button>Join For Free</button>
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
                        <p>Take Out The Guesswork From Your Next IELTS Exam With Keel And Get Desired Results. Listen to our happy Keelers.</p>
                    </div>
                    <div className="happyContent">
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>We believe with right exposure you can do wonders for yourself and your family</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Shubh Wadekar</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/hpy.svg" />
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
                    <div className="accordionCont">
                        <div className="accrdTabs">
                            <button className="acrdTabAct">Section 1</button>
                            <button>Section 2</button>
                            <button>Section 3</button>
                        </div>
                        <div className="acrdnGridsCont">
                            <div className="acrdGrd acrdAct">
                                <h3>What is IELTS Tutorials?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>IELTS Tutorials help students all over the world prepare for IELTS in the form of online coaching classes. The faculty includes certified and experienced trainers. </p>
                            </div>
                            <div className="acrdGrd">
                                <h3>Who can register for the IELTS Tutorials Online Group coaching?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>People from across the globe aspiring to live, work, or study overseas. We provide classes for both, IELTS General and Academics. </p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What if I face a technical problem during an online live class?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>What happens if I miss the session?</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>How can I join the IELTS Tutorials Online Group Coaching?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>You can join in three simple steps: 
                                <ul>
                                    <li>Click on "Book a trial class now", log in, and join the class. </li>
                                    <li>Enter your module type, time, and start date. </li>
                                    <li>Click on "Book Now."</li>
                                </ul>
                                Put in your Login details and Join Class.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>Will I get offline support during my sessions?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>As the faculties have classes lined up one after the another, it is difficult to cater to each and every student after session ends. So, it is advisable to keep your queries in the live class only or keep them handy till your next online group coaching class.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What all is included in the IELTS Tutorials Online Group Coaching?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>The online group coaching will be conducted by our certified and experienced faculty. The course consists of: 
                              
                                <ul>
                                    <li>8 Weeks of Online Group Training Classes</li>
                                    <li>Recorded Sessions</li>
                                    <li>20+ mock tests for real-time experience</li>
                                    <li>5 Practice test evaluations for better and improvised results</li>
                                    <li>Tips, Tricks, and Prediction Material for Better Results</li>
                                    <li>Progress Reports and Assignments for Offline Practice</li>
                                </ul>
                               </p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What do I need while attending online Group coaching class?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>You need to have:
                                <ul>
                                    <li>Stable internet connection</li>
                                    <li>Book, pencil, eraser, and sharpener</li>
                                    <li>Good microphone for Listening and Speaking Test</li>
                                    <li>Undisturbed environment</li>
                                    <li>Tips, Tricks, and Prediction Material for Better Results</li>
                                    <li>Progress Reports and Assignments for Offline Practice</li>
                                </ul>
                                </p>
                            </div>
                            <div className="acrdGrd">
                                <h3>How do I know if I have registered successfully?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Upon successful registration, you will receive a confirmation mail. This mail will consist of confirmation to your registration and login details or steps to join the class.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IELTS;