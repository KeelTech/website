import Image from 'next/image'

import CustomChatWidget from '@/components/CustomChatWidget';
import Accordian from '@/components/Accordian';
import { ELIGIBILITY_ACCORDIAN } from '@/actions/constant.js';

import { promiseSection, applicationPlatform, improveScore } from './style.js';

const Eligibility = ()=>{

    return(
    <> 
    <section className={promiseSection}>
        <div className="container">
            <h2 className="subHeadings mb-20">Comprehensive Ranking System
            </h2>
            <p className="blackSubPera mb-20">Enter your details to check your eligibility for FREE! </p>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="iframeContainer">
                        {/* <iframe src="https://staging.getkeel.com/chat"></iframe> */}
                        <CustomChatWidget/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="listEmlText">
                        <img className="img-fluid iframeImg"
                            src="https://getkeel.com/wp-content/uploads/2021/06/Saly-1.png" />
                        <ul>
                            <li>
                                <img className="img-fluid"
                                    src="https://getkeel.com/wp-content/uploads/2021/06/Step-1-1.svg"/> 
                                <p>Get Your CRS Score by chat</p>
                            </li>
                            <li>
                                <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/step-2.svg"/>
                                <p>Fast, Confidential & Free</p>
                            </li>
                            <li>
                                <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/step-3.svg"/>
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
                        <button className="submitBtn">Send</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rightImagePanel">
                        <img className="img-fluid" style={{width: '320px'}} src="/images/crs.png"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={improveScore + ' '+ 'addCustomPad' } style={{padding: '80px 0px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="scroreImgCont">
                        <img className="img-fluid" style={{width: '320px'}} src="/images/plane.png"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="scoreContent">
                        <h4 className="sectionSubHeading">
                            How Can I Improve My CRS Score?
                        </h4>
                        <p className="sectionSubHeading">
                            If you want to improve your CRS score to get picked for an Express Entry draw there are
                            several ways you can! Improving your CRS score is the best way to increase your chances of
                            getting an invitation. Following are some of the ways by wich you can improve your CRS
                            Score:
                        </p>
                        <Accordian data={ELIGIBILITY_ACCORDIAN}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Eligibility;