// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Accordian from '@/components/Accordian/newAccordian';
import { StudyAbroadAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';

// Import Swiper styles
import 'swiper/css';
const StudyAbroad = () => {
    

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>Chase Your Dream To Study Abroad With Keel
                            </h1>
                            <p>Guaranteed Scholarships for the first 500 Indian Students

                            </p>
                            <GetConsultationCTA />
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid" src="/assets/Frame-4-5.webp" />
                        </div>
                    </div>
                    <div className="bannerLast">
                        <p>Our students finished University to work at global offices of</p>
                        <div className="banImgsGrid">
                            <img src="/assets/unvrscty5.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty1.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty2.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty3.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty4.webp" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h5>Fastest Application Preparation On The Planet. Promise​</h5>

                            </div>
                        </div>
                        <div className='verticalMainCont customVerticalSection'>
                            <div className='verticalCarausalOuter customVerticalOuter'>
                                <div className="processStepCont">


                                    <div className="processStepGrid">
                                        <div className="prcStpIn newPrcwithImg">
                                            <img className='img-fluid' src='/assets/gr1.png'/>
                                            <p>Guaranteed Scholarships from the top Universities</p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn newPrcwithImg">
                                            <img className='img-fluid' src='/assets/gr2.png'/>

                                            <p>Alumni from Top Companies to guide you every step of the way
                                            </p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn newPrcwithImg">
                                            <img className='img-fluid' src='/assets/gr3.png'/>

                                            <p>Post Admission Support
                                            </p>
                                        </div>
                                    </div>


                                    <div className="processStepGrid">
                                        <div className="prcStpIn newPrcwithImg">
                                            <img className='img-fluid' src='/assets/gr4.png'/>

                                            <p>Free IELTS Coaching
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
            <section className="universitiesSection">
                <div className="container">
                    <div className="universitiesCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Courses</h4>
                            <h5>Popular Courses</h5>
                            <p>With industry standard practice material, regular doubt-solving sessions, 20+ IELTS tests, and much more, crack your next IELTS exam with Keel.</p>
                        </div>

                        <div className="universitiesGridCont subMiraGrdsOuter">
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Engineering</span>
                                        <h4>Design Eng, Field Eng, Quality Control Engineer, System Eng, Safety Engineer</h4>
                                        <p className='newStduyPera'>Design Eng, Field Eng, Quality Control Engineer, System Eng, Safety Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Data Science</span>
                                        <h4>Data Analyst, Business Analyst, Database Admin, ML Engineers,Data Architect</h4>
                                        <p className='newStduyPera'>US, UK, CANADA, CHINA, JAPAN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">BA</span>
                                        <h4>Product Manager, Market Research Ananlyst, Business Manager, Media Analyst</h4>
                                        <p className='newStduyPera'>SWITZERLAND, US, CANADA, FRANCE, AUSTRALIA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Computer Science</span>
                                        <h4>CN Architect, CS Specialist, Network, System Admin, Computer Design</h4>
                                        <p className='newStduyPera'>US, UK, CANADA, AUSTRALIA, UAE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Medical</span>
                                        <h4>Doctor, Surgeon, Dentist, Scientist</h4>
                                        <p className='newStduyPera'>USA, UK, CANADA, PHILIPPINES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Law</span>
                                        <h4>Bankruptcy Law, Banking Law, Commercial Law, Criminal Law, Human Rights Law</h4>
                                        <p className='newStduyPera'>USA, UK, AUSTRALIA, NETHERLANDS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Social Sciences</span>
                                        <h4>Anthropology, Archaeology, Economics, History, Musicology, Human Geography, Jurisprudence</h4>
                                        <p className='newStduyPera'>USA, UK, CANADA, SWEDEN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids subMiraGrds">
                                    <img className="img-fluid" src="/assets/3-1.png" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">Fashion Design</span>
                                        <h4>Bachelor of Design Arts and the Bachelor of Design Studies.</h4>
                                        <p className='newStduyPera'>CANADA, AUSTRALIA, USA
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <button className="seeAllBtn">See All <img className="img-fluid" src="/assets/vtR.webp" /></button> */}
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/ielts/online-class-ielts.webp" />
                        </div>
                        <div className="storyContent pl-30 cstmListWithHead">
                            <h4 className='cstmLstHeading'>Learn From The Top 0.01% IELTS Coaches In India</h4>
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
                                        <p>“It was always my dream to study abroad and build a life there. A friend recommended me to Keel and it was a smooth sail from there. They made the whole process fairly simple and transparent for me. Thank you team Keel.”</p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Sheetal Mehta</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/divya-sharma.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>“My study abroad application was rejected twice and I just could not afford another rejection. Just then, I came across Keel through a friend and they helped me with each and every step. I have finally got admission in my dream university. Sky’s the limit for me now.”
</p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Rajat Gupta</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/deep-saxena.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>“After my +2, I was so confused about everything. I knew I wanted to study abroad but there were just too many questions. Which course? Which country? Which University? Keel helped me with all my questions and also helped me make fast decisions. Thank you team Keel for giving me the right kickstart.”</p>
                                        <div className="hpyFoot align-center">
                                            <div className="hpLft">
                                                <h5>Ruchi Parmar</h5>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/ielts/divya-sharma.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="aboutUs">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">About</h4>
                        <h5>About <span>Us</span></h5>
                        <div className='customAboutMe'>
                            <img className='img-fluid' src='/assets/abtne.png'/>
                            <p className="customPeraAbout">Keel supports future leaders from India to fulfil their dreams of becoming a part of a global network and study at the top International Universities. Our team of global study experts and student mentors help you every step of the way – From choosing the right course and university to helping you fill your application and financing your education to settling once you land, Keel invests heavily in your journey towards success.</p>
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
                        <Accordian data={StudyAbroadAccordianData} />
                    </div>
                </div>
            </section>

            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid customSubFoot">
                        <h4>Learn From The Top 0.01% IELTS Coaches In India​</h4>
                        <p>Fill in your details via this form, we will get back to you.</p>
                        <button>Book a Demo Class</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudyAbroad;