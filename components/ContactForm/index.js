import { useState } from 'react';

import { validateEmail } from '@/helpers/utils.js';
import { contactWebsite } from '@/actions/index.js';
import CustomToaster from '@/components/CustomToaster';

import { container } from './style.js';

const ContactForm = () => {

    const [dataParams, setDataParams] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "message": ""
    })

    const { name, email, phone, message } = dataParams;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;

    const setData = (val, key) => {

        setDataParams((oldVal) => {
            return {
                ...oldVal,
                [key]: val
            }
        })
    }

    const showToaster = (isSucess = false, errorMsg = '') => {
        setToasterInfo({
            isVisible: true,
            isError: !isSucess,
            isSuccess: isSucess,
            msg: errorMsg
        })
        setTimeout(() => {
            setToasterInfo({
                isVisible: false,
                isError: false,
                isSuccess: false,
                msg: ''
            })
        }, 2000);
    }

    const handleEmailKeyPress = (e, key) => {
        const target = e;
        if (target.key == 'Enter') {
            document.getElementById(key).focus();
        }
    }

    const saveData = () => {
        if (!name) {
            showToaster(false, 'Please enter valid name')
            return;
        }
        if (!email) {
            showToaster(false, 'Please enter valid email')
            return;
        }
        if (!validateEmail(email)) {
            showToaster(false, 'Please enter valid email')
            return;
        }
        if (!phone) {
            showToaster(false, 'Please enter valid phone number')
            return;
        }
        if (!message) {
            showToaster(false, 'Please enter valid message')
            return;
        }
        contactWebsite(dataParams).then((resp) => {
            if (resp && resp.status == 1) {
                showToaster(true, 'Details Saved Successfully, we will get back to you.');
                setDataParams({
                    "name": "",
                    "email": "",
                    "phone": "",
                    "message": ""
                })
            } else {
                console.error('failed to create form lead', resp);
                showToaster(false, 'Failed to save details, Please try again later');
            }
        }).catch((e) => {
            console.error(e);
            showToaster(false, 'Failed to save details, Please try again later');
        })
    }
    return (
        <section className={container}>
            <div className="container">
                {
                    isVisible ? <CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg} /> : null
                }
                <div className="row reuseForm">
                    <div className="col-md-6 col-12 hideOnOther">
                        <div className="contactLeftCont">
                            <h4>Contact us</h4>
                            <div className='contactsImg'>
                                <img className="img-fluid" src="/images/contact-form.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 reuseForm">
                        <div className="contactForm">
                            <div className="formContainer">
                                <div className="inputForm">
                                    <input type="text" onChange={(e) => setData(e.target.value, 'name')} value={name} onKeyPress={(e) => handleEmailKeyPress(e, 'email')} />
                                    <label className={name ? 'fillInput' : ''}>Enter your Name</label>
                                </div>
                                <div className="inputForm">
                                    <input id="email" type="eamil" onChange={(e) => setData(e.target.value, 'email')} value={email} onKeyPress={(e) => handleEmailKeyPress(e, 'phone')} />
                                    <label className={email ? 'fillInput' : ''}>Enter your email id</label>
                                </div>
                                <div className="inputForm">
                                    <input id="phone" type="number" onChange={(e) => setData(e.target.value, 'phone')} value={phone} onKeyPress={(e) => handleEmailKeyPress(e, 'message')} />
                                    <label className={phone ? 'fillInput' : ''}>Enter your contact number </label>
                                </div>
                                <div className="inputForm">
                                    <textarea id="message" className="customTextArea" onChange={(e) => setData(e.target.value, 'message')} value={message}></textarea>
                                    <label className={message ? 'fillInput' : ''}>Enter your message</label>
                                </div>
                                <button className="submitBtn" onClick={saveData}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm