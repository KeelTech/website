// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { getBlogsList } from '@/actions/index.js';
import BlogNewView from '@/components/BlogsView/BlogNewView';
import React, { useRef, useEffect } from 'react';


// Import Swiper styles
import 'swiper/css';
const HomeView = ({ blogsList }) => {
    const router = useRouter()
    const typeTextRef = useRef();
    const cursorRef = useRef();

    useEffect(() => {
        const typedTextSpan = typeTextRef.current;
        const cursorSpan = cursorRef.current;

        const textArray = ["hard", "fun", "a journey", "LIFE"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        setTimeout(type, newTextDelay + 250);
    }, []);


    return (
        <>
            <section className="mainBannerSection">
                <div className="container">
                    <div className="mainBanner">
                        <div className="bannerTopHeading">
                            <h1 className="bannerHeading">Fly to the country of your dreams to <span ref={typeTextRef} className="typed-text"></span><span ref={cursorRef} className="cursor">&nbsp;</span></h1>
                            {/* Study | Settle | Work  */}
                            <p className="bannerParaSub">We are India’s largest tech-enabled study abroad platform supported by an army of experts</p>
                            <div className="bannerButton">
                                <button onClick={() => router.push(`/keel-study-in-abroad-program`)}>Study Abroad</button>
                                <button onClick={() => router.push(`/settleAbroad`)}>Settle Abroad</button>
                            </div>
                            <div className="bannerMidImg">
                                <img className="img-fluid forWeb" src="/assets/bgUp.webp" />
                                <img className="img-fluid forMobile" src="/assets/Hero-section.webp" />
                            </div>
                            <div className="bannerLast">
                                <p>Our students finished Universities and are drawing hefty salaries at</p>
                                <div className="banImgsGrid">
                                    <img src="/assets/ms.webp" alt="" className="img-fluid" />
                                    <img src="/assets/uber.webp" alt="" className="img-fluid" />
                                    <img src="/assets/delo.webp" alt="" className="img-fluid" />
                                    <img src="/assets/google.webp" alt="" className="img-fluid" />
                                    <img src="/assets/ama.svg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="outStory">
                <div className="container">
                    <div className="ourStoryColmn">
                        <div className="storyImg">
                            <img className="rectImgTop img-fluid" src="/assets/rect.webp" />
                            <img className="img-fluid" src="/assets/our.webp" />
                            <img className="rectImgBtm img-fluid" src="/assets/rect.webp" />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">Our Story</h4>
                            <h5>Here’s why we <span>Exist</span></h5>
                            <p>We believe that grades aren’t the true representation of what you are capable of achieving. With the right guidance and a nudge in the right direction, you can reach up to your full potential and become a part of an elite global group of future leaders.
                                <br />
                                <br />
                                We exist to help students like you around the world pursue the career of their interest, study at their dream universities and settle in the country of their choice. We undertake this journey with you so that you achieve your dreams for yourself and your family.
                                <br />
                                <br />
                                You can be whoever you want in this world, start your journey today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <div className="servicesCont">
                        <div className="storyContent customService">
                            <h4 className="grdHdng">Offerings</h4>
                            <h5>What do you <span>want to do?</span></h5>
                            <p>Our team at Keel is obsessed with making your journey a smooth ride. We are committed to be there with you every step of the way.</p>
                        </div>
                        <div className="serviceSlider">
                            <div className="srvcGrid">
                                <h5>Discovery call</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                            <div className="srvcGrid grdntTwo">
                                <h5>Career counselling</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                            <div className="srvcGrid gdntThird">
                                <h5>University/college shortlisting</h5>
                                <button>Know more<img className="img-fluid" src="/assets/arrow.svg" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="processSection">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width text-center">
                                <h4 className="grdHdng">Process</h4>
                                <h5>The <span>Process</span></h5>
                                <p>Take a flight with Keel and land at your dream university</p>
                            </div>
                        </div>
                        <div className='midScrollCont'>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Research and Discovery</h5>
                                            <p>Keel helps you explore the best courses and universities to kickstart your dream career</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-1.webp' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-2.webp' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Career guidance from the top 1%</h5>
                                            <p>Get mentored by leading industry experts from companies like Uber, Microsoft, Deloitte</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox'>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>Take all the right steps</h5>
                                            <p>We help in optimizing your profile as per international standards that helps you stand out</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-3.webp' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-4.webp' />
                                    </div>
                                </div>
                                <div className='leftprsCont'>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Be on top of the game</h5>
                                            <p>With our guidance throughout the process, your scores and application will be toough to beat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='verticalMainCont'>
                            <div className='verticalCarausalOuter'>
                                <div className="processStepCont">
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Research and Discovery</h5>
                                            <p>Explore your options: In terms of right courses, Universities, country and so on.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Career guidance from the top 1%</h5>
                                            <p>Choose your path: After talking to mentors from Google, Uber, Microsoft and more.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>Take all the right steps </h5>
                                            <p>Start your Journey: By creating a profile that showcases your best self.</p>
                                        </div>
                                    </div>
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Test preparations and submitting the application</h5>
                                            <p>Say hi to your dream life: By getting your desired scores and filing an application that stands out.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verticalImg'>
                                <img className='img-fluid' src='/assets/ver.webp' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="customer">
                <div className="customerCont">
                    <div className="container">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Customers</h4>
                            <h5>Happy <span>Keelers</span></h5>
                            <p>Our team at Keel works day and night to make our students’ dreams come true. Hear what they have to say about us.</p>
                        </div>
                    </div>
                    <div className="custCarusalCont">
                        <img className="quoteImg img-fluid" src="/assets/quote.svg" />
                        <div className="leftCrData">
                            <h4>Thousands of Happy Clients across the globe!</h4>
                        </div>
                        <div className="caraCustMain">
                            {/* <Swiper
                                spaceBetween={15}
                                slidesPerView={1.2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            > */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <img className="img-fluid" src="/assets/sheetal-mehta.webp" />
                                    <div className="usrNames">
                                        <h5>Sheetal Mehta</h5>
                                        <p>Migrated to Canada</p>
                                    </div>
                                </div>
                                <p>It was always my dream to study abroad and build a life there. A friend recommended me to Keel and it was a smooth sail from there. They made the whole process fairly simple and transparent for me. Thank you team Keel.</p>
                            </div>
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <img className="img-fluid" src="/assets/rajat-gupta.webp" />
                                    <div className="usrNames">
                                        <h5>Rajat Gupta</h5>
                                        <p>Migrated to Australia</p>
                                    </div>
                                </div>
                                <p> My study abroad application was rejected twice and I just could not afford another rejection. Just then, I came across Keel through a friend and they helped me with each and every step. I have finally got admission in my dream university. Sky's the limit for me now. </p>
                            </div>
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            <div className="carsCustmGrid">
                                <div className="usrDtls">
                                    <img className="img-fluid" src="/assets/ruchi-parmar.webp" />
                                    <div className="usrNames">
                                        <h5>Ruchi Parmar</h5>
                                        <p>Migrated to UK</p>
                                    </div>
                                </div>
                                <p>After my +2, I was so confused about everything. I knew I wanted to study abroad but there were just too many questions. Which course? Which country? Which University?  Keel helped me with all my questions and also helped me make fast decisions. Thank you team Keel for giving me the right kickstart. </p>
                            </div>
                            {/* </SwiperSlide> */}

                            {/* </Swiper> */}
                        </div>
                    </div>
                </div>
            </section>
            <BlogNewView blogsList={blogsList} showHighlighted />
            {/* <section className="followUsSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Follow us on</h4>
                        <h5>Insta<span>gram</span></h5>
                    </div>
                </div>
                <div className="followUsContImg">
                    <ul>
                        <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl2.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl4.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl4.webp" alt="" /></a></li>
                    </ul>
                </div>
            </section> */}
        </>
    )
}

export async function getServerSideProps() {
    const blogsList = await getBlogsList({})
    return {
        props: {
            blogsList
        }
    }
}

export default HomeView;