// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { getBlogsList } from '@/actions/index.js';
import React, { useState, useRef, useEffect } from 'react';
import useOnScreen from "@/helpers/hooks/useOnScreen.js";
import LazyLoadedHomeComponent from '@/components/LazyLoadedComponent/Home'

// Import Swiper styles
import 'swiper/css';
const HomeView = ({ blogsList }) => {
    const router = useRouter()
    const typeTextRef = useRef();
    const cursorRef = useRef();

    const child3Ref = useRef();
    const child3RefValue = useOnScreen(child3Ref);
    const [isChild3Ref, setIsChild3Ref] =  useState(false);
    useEffect(() => {
        const typedTextSpan = typeTextRef.current;
        const cursorSpan = cursorRef.current;

        const textArray = ["Study", "Work", "Settle"];
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

    useEffect(() => {
        if (!isChild3Ref)
            setIsChild3Ref(child3RefValue);
     }, [child3RefValue])

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
                                <a className='hmBtsNew' onClick={() => router.push(`/keel-study-in-abroad-program`)}>Study Abroad</a>
                                <a className='hmBtsNew' onClick={() => router.push(`/settleAbroad`)}>Settle Abroad</a>
                            </div>
                            <div className="bannerMidImg">
                                <img className="img-fluid forWeb" src="https://keeldocs.s3.amazonaws.com/media/public/homeFront.webp" alt="logo"/>
                                <img className="img-fluid forMobile" src="/assets/Hero-section.webp" alt="logo" />
                            </div>
                            <div className="bannerLast">
                                <p>Our students finished Universities and are drawing hefty salaries at</p>
                                <div className="banImgsGrid">
                                    <img src="/assets/ms.webp" alt="company" className="img-fluid" />
                                    <img src="/assets/uber.webp" alt="company" className="img-fluid" />
                                    <img src="/assets/delo.webp" alt="company" className="img-fluid" />
                                    <img src="/assets/google.webp" alt="company" className="img-fluid" />
                                    <img src="/assets/ama.svg" alt="company" className="img-fluid" />
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
                        {/* <Image
                            src="/assets/rect.webp" 
                            alt="process"
                            width={195}
                            height={195}
                            loading="lazy"
                            className="rectImgTop img-fluid"
                        /> */}
                        {/* <Image
                            src="/assets/our.webp" 
                            alt="process"
                            width={315}
                            height={201}
                            loading="lazy"
                            layout="responsive"
                            className="img-fluid"
                        /> */}
                        {/* <img className="img-fluid" src="/assets/our.webp" /> */}

                        {/* <Image
                            src="/assets/rect.webp" 
                            alt="process"
                            width={195}
                            height={195}
                            loading="lazy"
                            className="rectImgBtm img-fluid"
                        /> */}
                            <img className="rectImgTop img-fluid" src="/assets/rect.webp" alt="logo"/>
                            <img className="img-fluid" src="https://keeldocs.s3.amazonaws.com/media/public/home_ourstory.webp"  alt="logo"/>
                            <img className="rectImgBtm img-fluid" src="/assets/rect.webp"  alt="logo"/>
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
            <div ref={child3Ref}>
            {isChild3Ref &&<LazyLoadedHomeComponent blogsList={blogsList}/>}
            </div>
        
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