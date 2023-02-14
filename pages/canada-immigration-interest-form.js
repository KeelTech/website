import { useRef } from 'react';
import Head from 'next/head'

const IELTS = () => {
    const otpFormRef = useRef();

    return (
        <>
            <Head>
                <title>Canada Immigration Interest Form </title>
            </Head>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont noRevrsMob">
                        <div className="stdyBanText">
                            <h1>Canada Immigration Interest Form
                            </h1>
                            <p>Keel helps you connect with the best licensed immigration consultants for fastest and most transparent immigration advice. Please fill out the short form below and we'll reach out to you!
                            </p>
                        </div>
                        {/* <CommunityForm/> */}
                        <div className="communityForm custompdngMb">
                            <div className="comFomCont">
                                <div className="cmForm">
                                    <div className="inputForm"><input type="text" /><label>Full Name</label></div>
                                    <div className="inputForm"><input type="email" /><label>Email</label></div>
                                    <div className="inputForm"><input type="number" /><label>Contact Number</label></div>
                                    <div className="inputForm" style={{width:'100%;'}}><textarea type="text" ></textarea><label>Enter your Message</label></div>
                                </div>
                                <button className="cmSubmit">Start your journey</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='newCustomSection'>
                <div className="container">
                    <h2 className='ciHeading'>Reviews By Our Happy Customers</h2>
                    <div className="reviewSLider">
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>
                        <div className="revSlideCard">
                            <img className="img-fluid" alt="reviews"
                                src="https://getkeel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-22-at-7.25.52-AM-600x1300.jpeg" />
                        </div>

                    </div>
                </div>
            </section>
            <section className="newCustomSection">
                <div className="container">
                    <h2 className='customNewHeading'>Reviews By Our Happy Customers</h2>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="choseHeading">
                                <h4>Others</h4>
                            </div>
                            <div className="chooseDetails">
                                <ul>
                                    <li>
                                        <h3>Unlicensed Consultants</h3>
                                        <p> Application filed by sales people with no credibility or qualification. Getting your
                                            application filed by unlicensed consultants have a strong chance of rejection and
                                            potential ban from Canada.</p>
                                    </li>
                                    <li>
                                        <h3> Bad quality profile evaluation</h3>

                                        <p>
                                            Your profile gets evaluated by salespeople who don't have an inside view of how
                                            Immigration works. Remember: Eligibility doesn't make you a good candidate for PR in
                                            Canada
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Lack of Transparency</h3>
                                        <p>99% of the consultants don't share the credentials for your application on CIC. Once
                                            they receive the money, they leave you in the dark. You keep running for updates
                                        </p>
                                    </li>
                                    <li>
                                        <h3>You need to settle for the consultants who are near you
                                        </h3>
                                        <p>You are limited to only the consultants you find near you. The quality of advice is
                                            poor which is further limited to the bad quality unlicensed consultants.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Super high charges and scams
                                        </h3>
                                        <p>Since they not bounded by any rules laid by Canada, Unlicensed consultants charge
                                            anywhere from INR 80k-3 lac for giving consultation by random unlicensed
                                            consultants. They promise you jobs, give you fake job offers and you are scammed.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="choseHeading">
                                <h4>Others</h4>
                            </div>
                            <div className="chooseDetails">
                                <ul>
                                    <li>
                                        <h3>100% Licensed Canadian Consultants</h3>
                                        <p> Keel only has licensed Canadian immigration consultants (RCIC) on the team to
                                            provide you immigration advice. This maximizes your chances of success since these
                                            Consultants are professionals who know the immigration process inside out
                                        </p>
                                    </li>
                                    <li>
                                        <h3>High quality profile evaluation
                                        </h3>
                                        <p>We don't just evaluate your profile to check eligibility. We tell you the best
                                            programs you qualify for. In case you don't We lay down a step by step process to
                                            build your profile and become eligible. We don't file if you don't meet the required
                                            eligibility criteria and tell you upfront.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Don't run for updates anymore
                                        </h3>
                                        <p>Keel assigns you a customer success manager (CSM) whose sole duty is to make you
                                            successful. CSM handholds you throughout the process and provides you the support to
                                            get the required documents. They also keep sending constant updates. We run after
                                            you so that you don't have to.
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Best quality service at the comfort of your home
                                        </h3>
                                        <p>You are no longer limited to the bad quality consultants near you. Keel gets the best
                                            quality RCICs to file your immigration application for Canada PR from the comfort of
                                            your home wherever you are in this world!
                                        </p>
                                    </li>
                                    <li>
                                        <h3>High quality consultants at an affordable price
                                        </h3>
                                        <p>We are 100% transparent since every immigration advice at Keel is given by Licensed
                                            Canadian Immigration Consultants. We don't promise anything we can't deliver and at
                                            the end of your PR journey connect you to mentors who help you with job applications
                                            and even referrals!
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newCustomSection">
                <div className="container">
                    <h4 className="sectionSubHeading">End to End Immigration Application Platform
                    </h4>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="platformImg">
                                <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/01/Feature-3.png" alt="feature" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="platformList">
                                <ul>
                                    <li>
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2022/01/license-svgrepo-com-1.svg" alt="license" />
                                        <div>
                                            <p>Only Licensed Consultants </p>
                                            <span>No more ghost consultants ghosting you!</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2022/01/no-step-svgrepo-com-1.svg" alt="steps" />
                                        <div>
                                            <p>Don't Settle for the consultant "near you" </p>
                                            <span>No more ghost consultants ghosting you! </span>
                                        </div>
                                    </li>
                                    <li>
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2022/01/8884838fb15f00484d61d641962ce96e-1.svg" alt="feature" />
                                        <div>
                                            <p>Your Money Is Precious </p>
                                            <span>Know your chances before starting your application </span>
                                        </div>
                                    </li>
                                    <li>
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2022/01/295293-1.svg" alt="feature" />
                                        <div>
                                            <p>Don't Run For Updates For Months </p>
                                            <span>End to end application management at one platform </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tableSectio">
                <div className="container">
                    <h4 className="sectionSubHeading">Salary Comparison India vs Canada </h4>
                    <div className="tableCont">
                        <table>
                            <thead>
                                <tr>
                                    <th>OCCUPATION</th>
                                    <th>AV. CANADIAN SALARY </th>
                                    <th>AV. INDIAN SALARY </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IT Engineers/Software Professionals</td>
                                    <td>CAD 102,900</td>
                                    <td>INR 6,00,000</td>
                                </tr>
                                <tr>
                                    <td>Engineers</td>
                                    <td>CAD 85,500</td>
                                    <td>INR 3,60,000</td>
                                </tr>
                                <tr>
                                    <td>Doctors</td>
                                    <td>CAD 50,000</td>
                                    <td>INR 7,58,000</td>
                                </tr>
                                <tr>
                                    <td>Nurses</td>
                                    <td>CAD 78,000</td>
                                    <td>INR 2,98,000</td>
                                </tr>
                                <tr>
                                    <td>Sales & Marketing</td>
                                    <td>CAD 60,000</td>
                                    <td>INR 6,00,000</td>
                                </tr>
                                <tr>
                                    <td>Accounting</td>
                                    <td>CAD 45,800</td>
                                    <td>INR 2,49,000</td>
                                </tr>
                                <tr>
                                    <td>Teachers</td>
                                    <td>CAD 42,600</td>
                                    <td>INR 3,00,000</td>
                                </tr>
                                <tr>
                                    <td>Restaurant Managers</td>
                                    <td>CAD 42,000</td>
                                    <td>INR 4,14,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IELTS;