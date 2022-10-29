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
                            {
                                FAQ_ACCORDION.map((val, index)=>{
                                    const { title, value } = val;
                                    return <Accordion title={title} value={value} index={index}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IELTS;