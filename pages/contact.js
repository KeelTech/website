import { useState, useRef } from 'react';
import { createLeadSquareLead } from '@/actions';
import { LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY, LEAD_SQUARED_X_API } from '@/actions/constant.js';
import CustomToaster from '@/components/CustomToaster';
import Head from 'next/head'
const Contact = () => {

    const [val, setValues] = useState({
        name: '', mobile: '', email: '', msg: ''
    });
    const { name, mobile, email, msg } = val;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [leadGenerated, setLeadGen] = useState(false);

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const setVal = (newVal) => {
        setValues((oldVal) => {
            return { ...oldVal, ...newVal }
        })
    }

    const createLead = () => {
        //LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY
        if (!name || !msg || !email || !mobile) {
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: true,
                msg: 'Please fill all details'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }

        const headers = {
            "x-api-key": LEAD_SQUARED_X_API
        }
        const payload = [
            {
                "Attribute": "SearchBy",
                "Value": "Phone"
            },
            {
                "Attribute": "FirstName",
                "Value": name
            },
            {
                "Attribute": "EmailAddress",
                "Value": email
            },
            {
                "Attribute": "ProspectID",
                "Value": "xxxxxxxx-d168-xxxx-9f8b-xxxx97xxxxxx"
            },
            {
                "Attribute": "mobile",
                "Value": mobile
            },
            {
                "Attribute": "message",
                "Value": msg
            }
        ]
        const dataParams = {
            accessKey: LEAD_SQUARED_ACCESS_ID,
            secretKey: LEAD_SQUARED_SECRET_KEY,
            payload
        }


        createLeadSquareLead(dataParams, null, headers).then((resp) => {

            if(resp && resp.status==1){
                setLeadGen(true);
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Response submitted successfully'
                });
                setTimeout(() => {
                    hideToaster();
                }, 2000);
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed to save response, Please try again later'
                });
                setTimeout(() => {
                    hideToaster();
                }, 2000);
            }
        }).catch((err) => {
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Failed to Generate Lead, Please try again later'
            });
            setTimeout(() => {
                hideToaster();
            }, 2000);
        })
    }

    const mobileRef = useRef(null);
    const msgRef = useRef(null)
    const emailRef = useRef(null);

    const handleKeyPress = (e, refKey) => {
        const key = e.key;
        if (key == 'Enter') {
            refKey.current.focus();
        }
    }

    return (
        <>
            <Head>
                <title>Canada immigration official website | Keel Study Abroad - Keel </title>
                <meta content="Are you planning on moving to Canada to study | Get the best advice from the best Canadian immigration consultants | Keel" key="title" />
            </Head>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            {
                leadGenerated?<div className="activeLead"></div>:null
            }
            <footer className="footerMain forContactPage">
                <div className="container">
                    <div className="formMain">
                        <div className="formCntnt">
                            <h1 className="conHed">Contact Us</h1>
                            <p className="contSubPera">Have any queries? We would love to answer it for you.</p>
                            <ul className="contLst">
                                <li>
                                    <img className="img-fluid" src="/assets/mail1.svg" />
                                    <p>hello@getkeel.com</p>
                                </li>
                                <li>
                                    <img className="img-fluid" src="/assets/call.svg" />
                                    <p>+91-9810206875, +1-416-277-5284</p>
                                </li>
                                
                                <li>
                                    <img className="img-fluid" src="/assets/loc.svg" />
                                    <div>
                                        <p><span className='p-bold'>Getkeel Migration Services India Private Limited,</span> JMD Empire Square
                                            201-202, Mehrauli-Gurgaon Road, A Block, DLF Phase 1, Sector 28, Sarhol, Haryana,
                                            India 122002
                                        </p>
                                        <p className="topMargin">7b Pleasant Blvd, Suite 979, Toronto ON M4T 1K2, Canada</p>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- <p>We Are Here To Make Your Canada Immigration Journey Possible</p> --> */}
                        </div>
                        <div className="formInputMain">
                            <div className="inputForm">
                                <input type="text" className={name ? 'activeInput' : ''} value={name} onChange={(e) => setVal({ name: e.target.value })} onKeyPress={(e) => handleKeyPress(e, mobileRef)} />
                                <label>Full Name</label>
                            </div>
                            <div className="inputForm mobileInp">
                                <input type="text" ref={mobileRef} className={mobile ? 'activeInput' : ''} value={mobile} onChange={(e) => setVal({ mobile: e.target.value })} onKeyPress={(e) => handleKeyPress(e, emailRef)} />
                                <label>Contact Number</label>
                                <img className="img-fluid" src="/assets/ind.svg" />
                            </div>
                            <div className="inputForm">
                                <input type="email" ref={emailRef} className={email ? 'activeInput' : ''} value={email} onChange={(e) => setVal({ email: e.target.value })} onKeyPress={(e) => handleKeyPress(e, msgRef)} />
                                <label>Email</label>
                            </div>
                            <div className="inputForm">
                                <textarea value={msg} ref={msgRef} className={msg ? 'activeInput' : ''} onChange={(e) => setVal({ msg: e.target.value })}></textarea>
                                <label>Message</label>
                            </div>
                            <button className="submitBtn" onClick={createLead}>Send</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact;