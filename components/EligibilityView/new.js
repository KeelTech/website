import CustomChatWidget from '@/components/CustomChatWidget';
import Accordian from '@/components/Accordian';
import { ELIGIBILITY_ACCORDIAN } from '@/actions/constant.js';

import { promiseSection, applicationPlatform, improveScore } from './style.js';
import { useState } from 'react';

const Eligibility = () => {

    const [switchToggle, setswitchToggle] = useState(false);
    const ToggleSwitch = () => {
        switchToggle ? setswitchToggle(false) : setswitchToggle(true);
        console.log(switchToggle);
    }
    return (
        <>
            <section className={promiseSection}>
                <div className="container">
                    <h2 className="subHeadings mb-20">Comprehensive Ranking System
                    </h2>
                    <p className="blackSubPera mb-20">Enter your details to check your eligibility for FREE! </p>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={switchToggle ? "startChat btnReturn" : "startChat "}>
                                <button onClick={ToggleSwitch}>
                                    {switchToggle ? "Back" : "Start Chat"}
                                </button>
                            </div>
                            <div className={switchToggle ? "iframeContainer forMobileIframe" : "iframeContainer "}>
                                {/* <iframe src="https://staging.getkeel.com/chat"></iframe> */}
                                <CustomChatWidget newChat/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="listEmlText">
                                <img className="img-fluid iframeImg"
                                    src="/images/rocket-1.svg" alt="eligibility" />
                                <ul>
                                    <li>
                                        <img className="img-fluid"
                                            src="/images/Step-1.svg" alt="crs score" />
                                        <p>Get Your CRS Score by chat</p>
                                    </li>
                                    <li>
                                        <img className="img-fluid" src="/images/step-2.svg" alt="eligibility" />
                                        <p>Fast, Confidential & Free</p>
                                    </li>
                                    <li>
                                        <img className="img-fluid" src="/images/step-3.svg" alt="eligibility" />
                                        <p>Know your Options
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={applicationPlatform}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="leftConttPanel">
                                <h3>What is CRS Score?
                                </h3>
                                <p>The CRS is a points-based system that the Canadian government uses to assess and score your
                                    profile and rank it in the Express Entry pool. This CRS Calculator will determine and
                                    calculate your CRS score based on the answers you provide.
                                </p>
                                <p>
                                    The CRS calculator will estimate your CRS score which will determine if you are eligible for
                                    Canadian Permanent Residency through the Express Entry Program.
                                </p>
                                <p>This Express Entry Calculator tool lets you estimate your Comprehensive Ranking System (CRS)
                                    score for Express Entry immigration to Canada.
                                </p>
                                {/* <button className="submitBtn">Send</button> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rightImagePanel">
                                <img className="img-fluid" style={{ width: '320px' }} src="/images/rsscore.svg" alt="eligibility" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={improveScore}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-md-6">
                            <div className="scroreImgCont">
                                <img className="img-fluid" style={{ width: '320px' }} src="/images/crs.svg" alt="crs score" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="scoreContent">
                                <h4 className="sectionSubHeading">
                                    How Can I Improve My CRS Score?
                                </h4>
                                <p className="sectionSubHeading">
                                Improving your CRS score is the best way to increase your chances of getting an invitation. If you want to improve your CRS score to get picked for an Express Entry draw, there are several ways you can! Mentioned below are a few of them: 
                                </p>
                                <Accordian data={ELIGIBILITY_ACCORDIAN} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eligibility;