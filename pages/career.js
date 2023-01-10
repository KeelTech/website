import { useRouter } from 'next/router';

const Career = () => {
    const router = useRouter()
    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>Work with a driven team of industry experts
                            </h1>
                            <p>Skyrocket your professional journey with Keel and make your best career move</p>
                            <button>Explore Jobs</button>
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid" src="/assets/career-hero.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="universitiesSection">
                <div className="container">
                    <div className="universitiesCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Jobs</h4>
                            <h5>We are looking for <span>you </span></h5>
                            {/* <p>We believe with right exposure you can do wonders for yourself and your family hence we help you
                        make choices that</p> */}
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
                        <div className="universitiesGridCont threeGrid">
                            <div className="processStepGrid">
                                <div className="prcStpIn">
                                    <span className="stepNum">Design</span>
                                    <h5>UI/UX Designer</h5>
                                    <p className="subLoctn"><img className="img-fluid" src="/assets/mapIc.svg" /> Gurgaon/Remote
                                    </p>
                                    <p><strong>Experience:</strong> 2 - 4 Years</p>
                                    <p><strong>Skills:</strong> UX, Figma, Adobe</p>
                                    <div className="divider"></div>
                                    <div className='cstmFootJob'>
                                        <p>Own the end to the end design process for all our digital products
                                            (web and mobile) and the company’s visual brand identity. Work with
                                            product and engineering teams to define and execute our product design
                                            strategy.
                                        </p>
                                        <button className="aplyNbtn">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="processStepGrid">
                                <div className="prcStpIn">
                                    <span className="stepNum">Development</span>
                                    <h5>Backend Developer</h5>
                                    <p className="subLoctn"><img className="img-fluid" src="/assets/mapIc.svg" /> Gurgaon/Remote
                                    </p>
                                    <p><strong>Experience:</strong> 1 - 3 Years</p>
                                    <p><strong>Skills:</strong> Python, Mysql, Django</p>
                                    <div className="divider"></div>
                                    <div className='cstmFootJob'>
                                        <p>If you have excellent programming skills and a passion for developing
                                            applications or improving existing ones, As a Back-end developer, you
                                            should be able to develop and maintain functional and stable web
                                            applications to meet our company’s needs.
                                        </p>
                                        <button className="aplyNbtn">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="processStepGrid">
                                <div className="prcStpIn">
                                    <span className="stepNum">Development</span>
                                    <h5>Frontend Developer</h5>
                                    <p className="subLoctn"><img className="img-fluid" src="/assets/mapIc.svg" />Gurgaon/Remote
                                    </p>
                                    <p><strong>Experience:</strong> 1 - 3 Years</p>
                                    <p><strong>Skills:</strong> React, Redux, HTML</p>
                                    <div className="divider"></div>
                                    <div className='cstmFootJob'>
                                        <p>We are looking for a qualified Front-end developer, responsible for
                                            building the ‘client-side’ of our web applications. You should be able
                                            to translate our company and customer needs into functional and
                                            appealing interactive applications.
                                        </p>
                                        <button className="aplyNbtn">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className="seeAllBtn">See All <img className="img-fluid" src="/assets/vtR.webp" /></button> */}
                    </div>
                </div>
            </section>
            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid">
                        <p>If you think you are perfect fit for some <br />other role, feel free to drop us an email</p>
                        <button onClick={() => router.push('mailto:hello@getkeel.com')}>Email Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Career;