import { useState, useRef, useEffect } from 'react';

import { createLeadSquareLead } from '@/actions';
import { LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY, LEAD_SQUARED_X_API } from '@/actions/constant.js';
import CustomToaster from '@/components/CustomToaster';
import useOtpVerification from '@/helpers/hooks/useOtpVerification.js';

const NumberVerification = ({handleClose}) => {
    const { setOtpData, numberVerified, lastVerifiedNumber, disableSendOtp, sendOTPClicked, verifyOTPClicked, otpToasterInfo } = useOtpVerification();
    const [dataInfo, setDataInfo] = useState({
        number: '',
        otp: '',
        loading: false,
        name: '',
        age: '',
        gender: '',
        email: '',
    })

    const { number, otp, name, age, gender, email, } = dataInfo;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const setData = (val)=>{
        setDataInfo((prevVal)=>{
            return {...prevVal, ...val};
        })
    }

    useEffect(()=>{
        setToasterInfo(otpToasterInfo)
    },[otpToasterInfo])

    const handleNumberInputChange = (e) => {
        const val = e.target.value;
        setOtpData({disableSendOtp: false});
        if (val.length > 10) return null;
        setData({number: val});
        setOtpData({number: val});
    }

    const handleKeyPress = (e) => {
        const key = e.key;
        if (key == 'Enter') {
            sendOTPClicked();
            otpInput.current.focus();
        }
    }

    const handleOtpKeyPress = (e) => {
        const key = e.key;
        if (key == 'Enter') {
            verifyOTPClicked();
            emailRef.current.focus();
        }
    }

    const createLead = ()=>{
        //LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY
        if(!name || !age || !email || !gender){
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

        if(!numberVerified){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: true,
                msg: 'Please verify your number'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        const headers = {
            "x-api-key": LEAD_SQUARED_X_API,
            "access-control-allow-origin": "*"
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
                "Attribute": "Phone",
                "Value": lastVerifiedNumber
            },
            {
                "Attribute": "ProspectID",
                "Value": "xxxxxxxx-d168-xxxx-9f8b-xxxx97xxxxxx"
            },
            {
                "Attribute": "age",
                "Value": age
            },
            {
                "Attribute": "gender",
                "Value": gender
            },
            {
                "Attribute": "SearchBy",
                "Value": "Phone"
            }
        ]
        const dataParams = {
            accessKey: LEAD_SQUARED_ACCESS_ID,
            secretKey: LEAD_SQUARED_SECRET_KEY,
            payload
        }


        createLeadSquareLead(dataParams, null, headers).then((resp)=>{
            setToasterInfo({
                isVisible: true,
                isError: false,
                isSuccess: true,
                msg: 'Lead generated successfully'
            });
            setTimeout(() => {
                hideToaster();
                handleClose();
            }, 2000);
            setData({
                number: '',
                otp: '',
                loading: false,
                name: '',
                age: '',
                gender: '',
                email: ''
            })
            setOtpData({disableSendOtp: false, numberVerified: false, lastVerifiedNumber:''})
        }).catch((err)=>{
            console.log("error is", err);
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: true,
                msg: 'Failed to Generate Lead, Please try again later'
            });
            setTimeout(() => {
                hideToaster();
            }, 2000);
        })
    }

    const ageRef = useRef();
    const otpInput = useRef(null);
    const genderRef = useRef(null)
    const emailRef = useRef(null);

    return (
        <>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            <div className='formSettle'>
                <h3>Don't miss your free call</h3>
                <div className="formInputMain">
                    <div className="inputForm">
                        <input type="text" className={name?"activeInput":''} onChange={(e)=>setData({name: e.target.value})} value={name} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                ageRef.current.focus()
                            }
                        }}/>
                        <label>Full Name</label>
                    </div>
                    <div className='ageGender'>
                        <div className="inputForm">
                            <input type="number" className={age?"activeInput":''} onChange={(e)=>setData({age: e.target.value})} value={age} max="150" ref={ageRef} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                genderRef.current.focus()
                            }
                        }}/>
                            <label>Age</label>
                        </div>
                        <div className='inptSelect'>
                            <select onChange={(e)=>setData({gender: e.target.value})} value={gender} ref={genderRef}>
                                <option value="" disabled selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputForm mobileInp">
                        <input type="number" className={number?"activeInput":''} onChange={handleNumberInputChange} value={number} onKeyPress={handleKeyPress} />
                        <label className={number ? 'fillInput' : ''}>Contact Number</label>
                        <img className="img-fluid" src="/assets/ind.svg" />
                        <button className={`${disableSendOtp?'disableOtp':''} 'vryFy'`} onClick={sendOTPClicked}>Send OTP</button>
                    </div>
                    <div className="inputForm OTPInput">
                        <input type="number" disabled={numberVerified} className={otp?"activeInput":''} onChange={(e) => {
                            setData({otp: e.target.value})
                            setOtpData({otp: e.target.value});
                            }} value={otp} ref={otpInput} onKeyPress={handleOtpKeyPress}/>
                        <label className={otp ? 'fillInput' : ''}>OTP</label>
                        {
                            numberVerified?<button className='vryFy hideCursor'>Verified</button>:<button onClick={verifyOTPClicked} className='vryFy'>Verify</button>
                        }
                    </div>
                    <div className="inputForm">
                        <input type="email" className={email?"activeInput":''} value={email} onChange={(e)=>setData({email: e.target.value})} ref={emailRef} onKeyPress={(e)=>{
                            if(e.key ==="Enter"){
                                createLead()
                            }
                        }}/>
                        <label>Email</label>
                    </div>
                    <button className="submitBtn" onClick={createLead}>Send</button>
                </div>
            </div>

        </>
    )
}

export default NumberVerification;