// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Accordian from '@/components/Accordian/newAccordian';
import { StudyAbroadAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';
import { useRouter } from 'next/router';


// Import Swiper styles
import 'swiper/css';
const CrsScore = ({ blogsList }) => {
    const router = useRouter()

    const blogData = blogsList?.data ?? [];

    return (
        <>
            <section className='happyCustomers'>
                <div className='container'>
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">CRS</h4>
                        <h5>CRS score calculator</h5>
                        <p>Use this CRS score calculator  to estimate your CRS scores in seconds.</p>
                    </div>
                    <div className='CrsChatOuterCont'>
                        <div className='CrsChatLeft'>
                            <div className='chatApiCrs'>
                                <div className='crsChatHd'>
                                    Determine your chances of getting a Canadian PR right away!
                                </div>
                                <div className='crsChatBody'>

                                </div>
                                <div className='crsChatFoot'>
                                    <input type="text" placeholder='john' />
                                </div>
                            </div>
                        </div>
                        <div className='crsChatRight'>
                            <h4> This CRS tool is:</h4>
                            <ul>
                                <li>
                                    <img src='' className='img-fluid' />
                                    <div className='crsLstPera'>
                                        <p>fast (get your scores in under 30 seconds)</p>
                                    </div>
                                </li>
                                <li>
                                    <img src='' className='img-fluid' />
                                    <div className='crsLstPera'>
                                        <p>efficient in estimating your scores</p>
                                    </div>
                                </li>
                                <li>
                                    <img src='' className='img-fluid' />
                                    <div className='crsLstPera'>
                                        <p>free and confidential</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='universitiesSection'>
                <div className='container'>
                    <div className="storyContent full-width text-center">
                        <h5>Understanding CRS Score?</h5>
                    </div>
                    <p className='CrsmidParaGraph'>CRS, or Comprehensive Ranking System by the government of Canada, is a points-based ranking system used to rank profiles for the Express Entry pool. Candidates can use this Canada Express Entry points calculator to assess their eligibility and identify areas where they need to improve.
                    </p>
                    <p className='CrsmidParaGraph'>
                        The Canada Express Entry Program is used by the federal government of Canada to attract skilled workers from foreign countries. It is the most sought-after federal immigration program in Canada.</p>
                    <div className="universitiesGridCont threeGrid" >
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <div className='crsTopImg'>
                                    <img className="img-fluid" src="/assets/feature-3.webp" alt='feature' />
                                </div>
                                <div className="divider"></div>
                                <div className='cstmFootJob'>
                                    <p>Canadian Experience Class (CEC)
                                    </p>
                                    <button className="aplyNbtn">Know More </button>
                                </div>
                            </div>
                        </div>
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <div className='crsTopImg'>
                                    <img className="img-fluid" src="/assets/feature-3.webp" alt='feature' />
                                </div>
                                <div className="divider"></div>
                                <div className='cstmFootJob'>
                                    <p>Canadian Experience Class (CEC)
                                    </p>
                                    <button className="aplyNbtn">Know More </button>
                                </div>
                            </div>
                        </div>
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <div className='crsTopImg'>
                                    <img className="img-fluid" src="/assets/feature-3.webp" alt='feature' />
                                </div>
                                <div className="divider"></div>
                                <div className='cstmFootJob'>
                                    <p>Canadian Experience Class (CEC)
                                    </p>
                                    <button className="aplyNbtn">Know More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='CrsmidParaGraph'>Foreign nationals eligible for any one of the three above-mentioned programs are only considered for the Express Entry Program. If they are eligible, candidates must check their CRS scores to check if they are eligible for the Express Entry Program and submit their profiles. The profiles can be submitted using the IRCC (Immigration, Refugees and Citizenship Canada) website portal.</p>
                    <p className='CrsmidParaGraph'>
                        Once the IRCC sets the cut-off CRS score, candidates with CRS scores above the cutoff are invited through a randomized draw. This happens every two weeks and the cutoff may change for every cycle as well. Selected Express Entry candidates will be offered an Invitation to Apply (ITA). The candidates can fill in and submit their PR applications within 60 days from the date they have received the ITA.
                    </p>
                    <button className='crsMidBtn'>Calculate Your CRS Now</button>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-1.webp" />
                        </div>
                        <div className="crsAcrdPanel pl-30">
                            <h5>Factors for calculating CRS scores are divided into four categories: </h5>
                            <div class="acrdnGridsCont">
                                <div class="acrdGrd acrdAct">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="crsAcrdPanel pl-30">
                            <h5>Factors for calculating CRS scores are divided into four categories: </h5>
                            <div class="acrdnGridsCont">
                                <div class="acrdGrd acrdAct">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-1.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='universitiesSection'>
                <div className='container'>
                    <div className="storyContent full-width text-center">
                        <h5>Factors considered to calculate CRS scores CRS Score?</h5>
                    </div>
                    <p className='CrsmidParaGraph'>
                        When calculating the CRS score for the Federal Skilled Worker Program, the Canadian government also considers whether the applicant is applying with a spouse or common-law partner who is also immigrating to Canada. If the applicant is not applying with a spouse or their spouse is already a permanent resident of Canada or a Canadian citizen, the applicant would be assessed under the "Without a spouse/common-law partner" category.
                    </p>
                    <p className='CrsmidParaGraph'>
                        In this case, the applicant's CRS score would be calculated based on factors such as age, education, language proficiency, work experience, and other factors contributing to their adaptability in Canada. If the applicant is applying with a spouse or common-law partner who is also immigrating to Canada, they would be assessed under the "With a spouse/common-law partner" category.
                    </p>
                    <p className='CrsmidParaGraph'>
                        The maximum CRS score by adding up all the sections is 1200 points. Different criteria discussed below decide the category an applicant falls under, and the points are awarded on that basis.
                    </p>

                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-1.webp" />
                        </div>
                        <div className="crsAcrdPanel pl-30">
                            <h5>Factors for calculating CRS scores are divided into four categories: </h5>
                            <div class="acrdnGridsCont">
                                <div class="acrdGrd acrdAct">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="acrdGrd">
                                    <h3>What is Webflow and why is it the best website builder?
                                        <span> <img class="img-fluid" src="assets/acrdIco.svg" /></span>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resourceSection">
                <div className="container">
                    <div className="resrcCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Guides</h4>
                            <div className="subheadWithBtn">
                                <h5>Keel <span>Guides</span></h5>
                                <button>See All <img className="img-fluid" src="/assets/arrowDark.svg" /></button>
                            </div>
                            <p>We believe with right exposure you can do wonders for yourself and your family hence we help you make choices that</p>
                        </div>
                        <div className="serviceSlider customGrdnGrids">
                            <div className="srvcGrid">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid grdntTwo">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid gdntThird">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
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
                        <Accordian data={StudyAbroadAccordianData} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CrsScore;