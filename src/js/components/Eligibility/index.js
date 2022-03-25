import React from 'react';
import {promiseSection} from './style.js';
import {improveScore} from './style.js';
import {applicationPlatform} from './style.js';

const Eligibility = ()=>{

    return(
       <div > 
            <section className={promiseSection}>
            
        <div className="container">
            <h2 className="subHeadings mb-20">Comprehensive Ranking System
            </h2>
            <p className="blackSubPera mb-20">Enter your details to check your eligibility for FREE! </p>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="iframeContainer">
                        <iframe src="https://staging.getkeel.com/chat"></iframe>
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
                        <img className="img-fluid" style={{width: '320px'}} src="/../../../../staticContent/crs.png"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={improveScore}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="scroreImgCont">
                        <img className="img-fluid" style={{width: '320px'}} src="plane.png"/>
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
                        <div className="scroreAccordionCont">
                            <div className="accrdCard">
                               
                                <button className="course-accordion">1. Language:</button>
                                
                                <div className="course-panel">
                                    <p>
                                        Did you know that language ability is worth up to 260 CRS points in total for a single candidate?  <strong>French and English</strong>  are Canada’s official languages so take a french className and learn both to gain more points. Extra points are accumulated for each improvement in test results across the four language abilities (speaking, listening, reading, writing), but the magic threshold is when a candidate achieves a Canadian Language Benchmark (CLB) level of 9 in each ability.  If you ever studied French at school, or otherwise have a decent knowledge of the language, it may be wise to consider preparing to take the Test d’évaluation du français (TEF).
                                    </p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">2. Work</button>
                                <div className="course-panel">
                                    <p>Although <strong>Canadian work experience</strong> is more valued than non-Canadian work experience, if you have less than three years of full-time experience, keep working!The goal of remaining in employment is even more acute for candidates currently working in Canada on a <strong>work permit</strong> because more points are available for this work and it is rewarded for each annual threshold up to five years. Just make sure that if you are <strong>working in Canada</strong> , you maintain legal work status the entire time.</p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">3. Study</button>
                                <div className="course-panel">
                                    <p>
                                        Come study in Canada before applying for Express Entry! Having Canadian study experience can significantly increase your score.
                                    </p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">4. Education</button>
                                <div className="course-panel">
                                    <p>If you have two or more <strong>certificates, diplomas, or degrees</strong> you may be able to claim extra points under the education section.Furthermore, completing an additional level of education can also be beneficial. Some candidates are only a few courses or months away from completing a degree, diploma or certificate that, when assessed, would help to improve their ranking under the CRS.</p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">5. Spouse</button>
                                <div className="course-panel">
                                    <p>Candidates with a spouse, however, may have additional potential for improving their CRS score because the spouses <strong>level of education, language ability, and Canadian work experience</strong> may all be rewarded. You can add up to 20 points to your CRS through your partner’s first language scores. You can add up to 10 points to your CRS score by getting ECA done for your partner’s education.</p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">6. Provincial Nominee Programs</button>
                                <div className="course-panel">
                                    <p>If you want a 600-point boost to your CRS score, plus the knowledge that you are being welcomed with open arms into your chosen destination province, it’s time to learn about the Provincial Nominee Programs (PNPs). A nomination from one of the provinces under Express Entry Provincial Nominee Programs adds 600 additional points to your overall CRS and in most cases will secure you an ITA in the next draw.It’s important to display your full education and work record, stay up to date on <strong>Canadian immigration news</strong> , and have all your documents ready and reviewed in preparation to make an application promptly. PNP categories often open and close quickly, sometimes within days or even hours.</p>
                                </div>
                            </div>
                            <div className="accrdCard">
                                <button className="course-accordion">7. Job Offer</button>
                                <div className="course-panel">
                                    <p>While the relative value of a <strong>qualifying job offer</strong> is not as great as it once was – in most cases, down to 50 CRS points from a previous value of 600 points – obtaining a job offer remains an important factor. If you are not currently in Canada, obtaining a job offer can be difficult, but there are plenty of online resources where you may find employment opportunities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default Eligibility;