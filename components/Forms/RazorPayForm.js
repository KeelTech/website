import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/router";

import { createRazorPayOrder } from '@/actions';
import CustomToaster from '@/components/CustomToaster';
import useOtpVerification from '@/helpers/hooks/useOtpVerification.js';
import LoadingWidget from '@/components/LoadingWidget';

const RazorPayForm = ({handleClose, plan_id, handleOrderCreateResponse}) => {
    var router = useRouter();
    const { setOtpData, numberVerified, lastVerifiedNumber, disableSendOtp, sendOTPClicked, verifyOTPClicked, otpToasterInfo } = useOtpVerification();
    const [isLoading, setLoader] = useState(false);

    const [dataInfo, setDataInfo] = useState({
        number: '',
        otp: '',
        loading: false,
        name: '',
        email: '',
        lname: ''
    })
    const { number, otp, name, email, lname} = dataInfo;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false,
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

    const createOrder = ()=>{
        if(!name || !email || !lname){
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
      //  "first_name", "last_name", "phone_number", "email", "plan_id"

        const postParams = {
            "first_name": name,
            "last_name": lname,
            "phone_number": number,
            "email": email,
            "plan_id": plan_id,
            "amount": plan_id==4?1999:35000
        }
     setLoader(true);

        createRazorPayOrder(postParams, null).then((resp)=>{
            setLoader(false);
            setData({
                number: '',
                otp: '',
                loading: false,
                name: '',
                lname: '',
                email: ''
            })
            if(resp && resp.status==1){
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Response submitted successfully'
                });
                handleOrderCreateResponse(resp, {name, number, email});
                setTimeout(() => {
                    hideToaster();
                    handleClose();
                }, 400);
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed to save response, Please try again later'
                });
                setTimeout(() => {
                    hideToaster();
                }, 400);
                handleOrderCreateResponse(null);
            }
            setOtpData({disableSendOtp: false, numberVerified: false, lastVerifiedNumber:''})
        }).catch((err)=>{
            console.log("error is", err);
            setLoader(false);
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Failed to Generate Lead, Please try again later'
            });
            setTimeout(() => {
                hideToaster();
            }, 2000);
            handleOrderCreateResponse(null)
        })
    }

    const lnameRef = useRef();
    const otpInput = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    return (
        <>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            {
                isLoading?<LoadingWidget/>:null
            }
            <div className='formSettle'>
                <h3>Please enter all Details</h3>
                <div className="formInputMain stdyBanText">                 
                    <div className='ageGender'>
                        <div className="inputForm">
                            <input type="text" className={name?"activeInput":''} onChange={(e)=>setData({name: e.target.value})} value={name} onKeyPress={(e)=>{
                                if(e.key ==="Enter"){
                                    lnameRef.current.focus()
                                }
                            }}/>
                            <label>First Name</label>
                        </div>

                        <div className="inputForm">
                            <input type="text" className={lname?"activeInput":''} onChange={(e)=>setData({lname: e.target.value})} value={lname} onKeyPress={(e)=>{
                                if(e.key ==="Enter"){
                                    phoneRef.current.focus()
                                }
                            }}/>
                            <label>Last Name</label>
                        </div>
                    </div>

                    <div className="inputForm mobileInp inputWithOtp">
                        <input type="number" ref={phoneRef} className={number?"activeInput":''} onChange={handleNumberInputChange} value={number} onKeyPress={handleKeyPress} />
                        <label className={number ? 'fillInput' : ''}>Contact Number</label>
                        <img className="img-fluid" src="/assets/ind.svg" alt="mobile"/>
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
                                createOrder()
                            }
                        }}/>
                        <label>Email</label>
                    </div>
                    <button className="submitBtn" onClick={createOrder}>Send</button>
                </div>
            </div>

        </>
    )
}

export default RazorPayForm;