// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/router";

import Accordian from '@/components/Accordian/newAccordian';
import { StudyAbroadAccordianData } from '@/helpers/constant.js'
import GetConsultationCTA from '@/components/GetConsultationCTA';
import React from 'react';
import CreateRazorPayOrderModal from '@/components/CreateRazorPayOrder';
import { captureRazorpaylead } from '@/actions';
import LoadingWidget from '@/components/LoadingWidget';

// Import Swiper styles
import 'swiper/css';
const StudyAbroad = () => {
    var router = useRouter();
    const [isLoading, setLoader] = React.useState(false);

    const [selectedTab, setActiveTab] = React.useState('3');
    const [openRazorPayModal, setRazorPayModal] = React.useState(false);
    const [selectedPlanId, setPlanId] = React.useState('');
    const otpFormRef = React.useRef();

    const paymentMethodClicked = (val)=>{
        setPlanId(val);
        setRazorPayModal(true);
    }

    const handleRazorPayOrder = (orderID, transactionId, userInfo)=>{
        const { name, number, email } = userInfo||{};
        var options = {
            "key": "rzp_live_SHoE722sQX5Zzg", // Enter the Key ID generated from the Dashboard
            "amount": selectedPlanId==4?'199900':"3500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Keel Corp", //your business name
            "description": "Test Transaction",
            "image": "https://getkeel.com/assets/Logo.svg",
            "order_id": orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          //  "callback_url": "https://getkeel.com/settleAbroad",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": name, //your customer's name
                "email": email,
                "contact": number //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
            "handler": async function (response){
                setLoader(true);
                console.log("inside success handler", response);
                if(response.razorpay_payment_id){
                    const postParams = {
                        payment_id: response.razorpay_payment_id,
                        transaction_id: transactionId,
                        order_id: orderID
                    }
                    captureRazorpaylead(postParams).then((resp)=>{
                        console.log("success in capture payment");
                        setLoader(false);
                        router.push('/payment-success');
                    }).catch((e)=>{
                        console.log("error in capture payment", e);
                        setLoader(false);
                        router.push('/payment-failure');
                    })
                }
            },
            "modal": {
                "ondismiss": function(){
                    console.log("on dismiss clicked");
                    router.reload(window.location.pathname)
                 }
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
            //router.push('/payment-failure');
            router.reload(window.location.pathname)
        });
        rzp1.on('payment.captured', async function (response){
            console.log("API PAYMENT CAPTURED", response);
            if(response.razorpay_payment_id){
                captureRazorpaylead(postParams).then((resp)=>{
                    console.log("success in capture payment");
                    setLoader(false);
                    router.push('/payment-success');
                }).catch((e)=>{
                    console.log("error in capture payment", e);
                    setLoader(false);
                    router.push('/payment-failure');
                })
            }
        });
        rzp1.open();
    }

    const handleOrderCreateResponse = (response, userInfo)=>{
        if(response && response.data){
            const orderID = response.data.order_id;
            const transactionId = response.data.transaction_id;
            handleRazorPayOrder(orderID, transactionId, userInfo);

        }
    }

    const handleClose = ()=>{
        setRazorPayModal(false);
        setPlanId('');
    }
   

    return (
        <>
            {
                openRazorPayModal?<CreateRazorPayOrderModal handleClose={handleClose} handleOrderCreateResponse={handleOrderCreateResponse} plan_id={selectedPlanId}/>:null
            }
            {
                isLoading?<LoadingWidget/>:null
            }
            <button id="rzp-button1" style={{display: 'none'}} >Pay</button>
            <section className="studyBannerSection">
                <GetConsultationCTA ref={otpFormRef} hideText lead_origin='studyAbroad' />
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>World’s
                                <span> largest </span>
                                study abroad counselling platform
                            </h1>
                            <p>Mentoring | Profile Building | Test Preparations | End to End Visa Solutions
                            </p>
                            <GetConsultationCTA lead_origin='study' />
                        </div>
                        <div className="studyBanImg">
                            <img className="img-fluid" src="/assets/study-abroad-hero-web.webp" alt='study abroad' />
                        </div>
                    </div>
                    {/* <div className="bannerLast">
                        <p>Our students finished University to work at global offices of</p>
                        <div className="banImgsGrid">
                            <img src="/assets/unvrscty5.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty1.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty2.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty3.webp" alt="" className="img-fluid" />
                            <img src="/assets/unvrscty4.webp" alt="" className="img-fluid" />
                        </div>
                    </div> */}
                </div>
            </section>
            {/* <section className="universitiesSection">
                <div className="container">
                    <div className="universitiesCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Universities</h4>
                            <h5><span>Top Universities & Colleges </span>to Study Abroad Exist</h5>
                            <p>If you have the will to get into your dream university, we have a way to make it happen.</p>
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
                        <div className="universitiesGridCont">
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="processSection">
                <div className="container">
                    <div className="processMain memberShip">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Membership</h4>
                                <h5>Our Membership</h5>
                                {/* <p>If you have the will to get into your dream university, we have a way to make it happen.</p> */}
                                <p>Here is everything that you get when you choose Keel as your study abroad partner:</p>
                            </div>
                        </div>
                        <div className='plansContainer'>
                            <div className='plansOuter'>

                                <h4>Keel Prime Membership</h4>
                                <div className='plnPrc'>
                                    <p><sup>₹</sup>1999</p><sub>Only</sub>
                                    {/* <span>₹13000</span> */}
                                </div>
                                <button className={selectedTab === '1' ? 'pngChose rcmndBtn' : 'pngChose'} onClick={()=>paymentMethodClicked(4)}>Choose This Membership</button>
                                <ul>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>1:1 Counselling session with handpicked study abroad experts</p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>University shortlisting that gets you the right jump in your career trajectory
                                    </p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Application filing to help you get into your dream university</p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>SOP & LOR/LOE editing assistance to build a story that gets you attention and admission</p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Study visa filing with the help of RCICs (Licensed Canadian Immigration consultants)
                                    </p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>IELTS Classes with top 0.1% IELTS coaches in India </p></li>
                                    <li className=''><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Scholarship Assistance to help you avail the maximum scholarship.</p></li>
                                </ul>
                            </div>
                            <div className='plansOuter '>
                                <div className='recomndedOut'>
                                    <p>Recommended</p>
                                </div>

                                <h4>Keel Elite Membership</h4>
                                <div className='plnPrc'>
                                    <p><sup>₹</sup>35,000</p><sub>per application</sub>
                                    {/* <span>₹120000</span> */}
                                </div>
                                <button className={selectedTab === '3' ? 'pngChose rcmndBtn' : 'pngChose'} onClick={()=>paymentMethodClicked(5)}>Choose This Membership</button>
                                <ul>
                                    <li><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>1:1 Counselling session with alumnus from Top Business Schools in the world</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>Profile Building & Application filing for better chances of getting an admission into your dream university</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>SOP & LOR/LOE editing assistance to build a story that gets you attention and admission
                                    </p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p> Study visa filing with the help of RCICs (Licensed Canadian Immigration consultants)</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>IELTS Classes with top 0.1% IELTS coaches in India.</p></li>
                                    <li ><span className='imgCont'><img className='img-fluid' src='/assets/check.png' /></span><p>GRE & GMAT preparation with the best coaches in India</p></li>
                                </ul>
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
                                <h5>The Process<span></span></h5>
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
                                        <img className='img-fluid' src='/assets/home/home-process-1.webp' alt='home' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-2.webp' lang='home' />
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
                                        <img className='img-fluid' src='/assets/home/home-process-3.webp' alt='home' />
                                    </div>
                                </div>
                            </div>
                            <div className='inrScrollBox reverseMobile'>
                                <div className='rightPrsCont'>
                                    <div className='verticalImg'>
                                        <img className='img-fluid' src='/assets/home/home-process-4.webp' alt='process' />
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
                    </div>
                </div>
            </section>
            <section className="processSection d-none">
                <div className="container">
                    <div className="processMain">
                        <div className="processCont">
                            <div className="storyContent full-width">
                                <h4 className="grdHdng">Steps</h4>
                                <h5>How it<span> Works</span></h5>
                                <p>"A journey of a thousand miles begins with a single step." - Lao Tzu </p>
                            </div>
                        </div>
                        <div className='verticalMainCont'>
                            <div className='verticalCarausalOuter'>
                                <div className="processStepCont">
                                    {/* <Swiper
                                        direction={"vertical"}
                                        spaceBetween={10}
                                        slidesPerView={1.5}
                                        centeredSlides={true}
                                        className="verticalSwiper"
                                    > */}
                                    {/* <SwiperSlide> */}
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 1</span>
                                            <h5>Research and Discovery</h5>
                                            <p>Explore your options: In terms of right courses, Universities, country and so on.
                                            </p>
                                        </div>
                                    </div>
                                    {/* </SwiperSlide> */}
                                    {/* <SwiperSlide> */}
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 2</span>
                                            <h5>Career guidance from the top 1%</h5>
                                            <p>Choose your path: After talking to mentors from Google, Uber, Microsoft and more.</p>
                                        </div>
                                    </div>
                                    {/* </SwiperSlide> */}
                                    {/* <SwiperSlide> */}
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 3</span>
                                            <h5>Take all the right steps </h5>
                                            <p>Start your Journey: By creating a profile that showcases your best self.</p>
                                        </div>
                                    </div>
                                    {/* </SwiperSlide> */}
                                    {/* <SwiperSlide> */}
                                    <div className="processStepGrid">
                                        <div className="prcStpIn">
                                            <span className="stepNum">Step 4</span>
                                            <h5>Test preparations and submitting the application</h5>
                                            <p>Say hi to your dream life: By getting your desired scores and filing an application that stands out.</p>
                                        </div>
                                    </div>
                                    {/* </SwiperSlide> */}
                                    {/* </Swiper> */}
                                </div>
                            </div>
                            <div className='verticalImg'>
                                <img className='img-fluid' src='/assets/ver.webp' alt='vertical icon' />
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
                        <p>Our team at Keel works day and night to make our students’ dreams come true.
                            Hear what they have to say about us.</p>
                    </div>
                    <div className="happyContent">
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>It was always my dream to study abroad and build a life there. A friend recommended me to Keel and it was a smooth sail from there. They made the whole process fairly simple and transparent for me. Thank you team Keel. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Sheetal Mehta</h5>
                                                <button>Studying in UK</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/sheetal-mehta.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p> My study abroad application was rejected twice and I just could not afford another rejection. Just then, I came across Keel through a friend and they helped me with each and every step. I have finally got admission in my dream university. Sky's the limit for me now. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Rajat Gupta</h5>
                                                <button>Studying in USA</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/rajat-gupta.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p> After my +2, I was so confused about everything. I knew I wanted to study abroad but there were just too many questions. Which course? Which country? Which University?  Keel helped me with all my questions and also helped me make fast decisions. Thank you team Keel for giving me the right kickstart. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Ruchi Parmar</h5>
                                                <button>Studying in Canada</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/ruchi-parmar.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>The foremost question I had with Keel was, “I have just 2 weeks. Will you be able to pull it off?” They smiled and said, “Give us a chance!” And  I can’t be more thrilled with the way they handled my study abroad application. Thank you team Keel for all the help. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Luv Gupta</h5>
                                                <button>Studying in Italy</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/luv-gupta.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>I have been postponing my study abroad  dream for the longest time.
                                            There never was enough time to prepare for IELTS, research about the universities and really make it happen. Entered Keel (they were recommended by a  friend of course). In my first call only, I knew I had found the right people to help me fulfil my dream of settling abroad. Thank you team Keel for helping me every step of the way.
                                        </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Luveen Mishra</h5>
                                                <button>Studying in Japan</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/luveen-mishra.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hpyGridCont">
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>The counselors at Keel are highly trained and professional. I got the best advice in terms of Universities. I was so overwhelmed with all the options and Keel helped me every step of the way. </p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Nitish Jha</h5>
                                                <button>Studying in Australia</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/nitish-jha.webp" alt='user image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hpyGrids">
                                <div className="hpyOuter">
                                    <div className="hpyInr">
                                        <p>Keel has helped me with all the study abroad process. They helped me file the application, prepare for IELTS and create a profile. I am now waiting for the admit letter. Thank you team Keel!</p>
                                        <div className="hpyFoot">
                                            <div className="hpLft">
                                                <h5>Janak Pandya</h5>
                                                <button>Studying in Germany</button>
                                            </div>
                                            <img className="img-fluid hpyRht" src="/assets/studyAbroad/janak-pandya.webp" alt='user image' />
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
                        <Accordian data={StudyAbroadAccordianData} />
                    </div>
                </div>
            </section>

            {/* <section className="universitiesSection">
                <div className="container">
                    <div className="universitiesCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Universities</h4>
                            <h5><span>Top Universities & Colleges </span>to Study Abroad Exist</h5>
                            <p>We believe with right exposure you can do wonders for yourself and your family hence we help you
                                make choices that</p>
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
                        <div className="universitiesGridCont">
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="unvGrdnntOuter">
                                <div className="unvGrids">
                                    <img className="img-fluid" src="/assets/university.webp" />
                                    <div className="unvGrdCont">
                                        <span className="unvGrdnt">UK</span>
                                        <h4>University of Oxford</h4>
                                        <ul className="rngkList">
                                            <li>
                                                <span>Ranking </span>
                                                <p>2</p>
                                            </li>
                                            <li>
                                                <span>Seats</span>
                                                <p>635</p>
                                            </li>
                                            <li>
                                                <span>Fees</span>
                                                <p>$45k</p>
                                            </li>
                                        </ul>
                                        <button>View University <img className="img-fluid" src="/assets/vtR.webp" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="seeAllBtn">See All <img className="img-fluid" src="/assets/vtR.webp" /></button>
                    </div>
                </div>
            </section> */}
            {/* <section className="processSection">
                <div className="container">
                    <div className="processCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Steps</h4>
                            <h5>How it <span>Works</span></h5>
                            <p>"A journey of a thousand miles begins with a single step." - Lao Tzu</p>
                        </div>
                    </div>
                    <div className="processStepCont">
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <span className="stepNum">Step 1</span>
                                <h5>Get in touch with Consultant</h5>
                                <p>Decrease the burden of managing active work in issues and pull requests by providing a
                                    separate space decrease the burden of managing active work in issues and pull requests </p>
                            </div>
                        </div>
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <span className="stepNum">Step 2</span>
                                <h5>Get in touch with Consultant</h5>
                                <p>Decrease the burden of managing active work in issues and pull requests by providing a
                                    separate space decrease the burden of managing active work in issues and pull requests </p>
                            </div>
                        </div>
                        <div className="processStepGrid">
                            <div className="prcStpIn">
                                <span className="stepNum">Step 3</span>
                                <h5>Get in touch with Consultant</h5>
                                <p>Decrease the burden of managing active work in issues and pull requests by providing a
                                    separate space decrease the burden of managing active work in issues and pull requests </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="happyCustomers">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Customers</h4>
                        <h5>Happy <span>Keelers</span></h5>
                        <p>We believe with right exposure you can do wonders <br />for yourself and your family hence we help
                            you make choices that</p>
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
            </section> */}
            {/* <section className="faqSection">
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
                            <div className="acrdGrd acrdAct">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="acrdGrd">
                                <h3>What is Webflow and why is it the best website builder?
                                    <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default StudyAbroad;