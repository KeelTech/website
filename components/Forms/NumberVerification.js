import { useState, useRef } from 'react';

import { sendOTP, verifyOTP } from '@/actions';
import CustomToaster from '@/components/CustomToaster';

const NumberVerification = ()=>{

    const [number, setNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [loading, setLoading] = useState(false);
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const otpInput = useRef(null);

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const sendOTPClicked = ()=>{
        const postParams = {
            phone_number: number
        }
        if(!number){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Please Fill Valid Mobile No'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        setLoading(true);
        sendOTP(postParams, (resp, err)=>{
            setLoading(false);
            if(resp){
                // setDataParams((oldState)=>{
                //     return {...oldState, ...{phone_number: {
                //         value: mobileNo,
                //         labels: "Phone Number",
                //         type: "phone",
                //         lastVerifiedNo: '',
                //         otpSent: true
                //     }}}
                // })
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Sent Successfully'
                });
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Sent OTP'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    const verifyOTPClicked = ()=>{
        const postParams = {
            otp
        }
        if(!otp){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Please Fill Valid OTP'
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        setLoading(true);
        verifyOTP(postParams, (resp, err)=>{
            setLoading(false);
            if(resp){
                // setDataParams((oldState)=>{
                //     return {...oldState, ...{phone_number: {
                //         value: mobileNo,
                //         labels: "Phone Number",
                //         type: "phone",
                //         lastVerifiedNo: mobileNo,
                //         otpSent: true,
                //     }}}
                // })
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'OTP Verified Successfully'
                });
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed To Verify OTP'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        })
    }

    const handleNumberInputChange = (e)=>{
        const val = e.target.value;
        if(val.length>10) return null;
        setNumber(val);
    }

    const handleKeyPress =(e)=>{
        const key = e.key;
        if(key=='Enter'){
            sendOTPClicked();
            otpInput.current.focus();
        }
    }

    const handleOtpKeyPress = (e)=>{
        const key = e.key;
        if(key=='Enter'){
            verifyOTPClicked();
        }
    }

    return(
        <>
            <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
            <div className="inputForm mobileInp">
                <input type="number" onChange={handleNumberInputChange} value={number} onKeyPress={handleKeyPress}/>
                <p>Send OTP</p>
                <label className={number?'fillInput':''}>Contact Number</label>
            </div>
            <div className="inputForm mobileInp">
                <input type="number" onChange={(e)=>setOTP(e.target.value)} value={otp} ref={otpInput} onKeyPress={handleOtpKeyPress}/>
                <label className={otp?'fillInput':''}>Contact Number</label>
            </div>
            <p onClick={verifyOTPClicked}>Submit OTP</p>
        </>
    )
}

export default NumberVerification;