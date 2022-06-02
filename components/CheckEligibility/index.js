import { useState, useCallback } from 'react';
import Image from 'next/image'

import { validateEmail } from '@/helpers/utils.js';
import { createLead } from '@/actions/index.js';
import CustomToaster from '@/components/CustomToaster';
import { useAppContext } from '@/context/index.js';

import { container } from './style.js';

const CheckEligibily = ()=>{
    const { activeComponents } = useAppContext();

    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const handleEmailKeyPress = (e)=>{
        const target = e;
        if(target.key=='Enter'){
            if(validateEmail(email)){
                target.preventDefault();
                document.getElementById('contactNo').focus();
            }
        }
    }

    const handleContactChange = (e)=>{
        setContactNo(e.target.value)
    }

    const handleContactKeyPress = (e)=>{
        const target = e;
        if(target.key=='Enter'){
            target.preventDefault();
            checkEligibility();
        }
    }

    const showToaster = (isSucess=false, errorMsg='')=>{
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
                msg:''
            })
        }, 4000);
    }

    const checkEligibility = ()=>{
        const postData = {
            email, 
            phone: contactNo
        }
        if(!validateEmail(email)){
            showToaster(false, 'Please enter valid email id');
            return;
        }
        if(!contactNo){
            showToaster(false, 'Please enter valid mobile number');
            return;
        }
        createLead(postData).then((resp)=>{
            if(resp && resp.status ==1){
                showToaster(true, 'Details Saved Successfully, we will get back to you.');
                setContactNo('');
                setEmail('');
            }else{
                console.log('failed to create lead', resp);
                showToaster(false, 'Failed to save details, Please try again later');
            }
        }).catch((e)=>{
            console.error('failed to create lead uncaught error', e);
            showToaster(false, 'Failed to save details, Please try again later');
        })
    }

    const renderHomeText = useCallback(()=>{
        const homeWidget = activeComponents?.filter(x=>x.id===3);
        if(homeWidget.length){
            const { title, body, is_active } = homeWidget[0];
            if(is_active){
                return <>
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{__html: body}}></p>
                </>
            }
            return <>
                <h1>Want To Immigrate To Canada?</h1>
                <p>Keel connects you with Canada’s <span className="coloredHeading">best licensed immigration consultants.</span></p>
            </>
        }
        return <>
            <h1>Want To Immigrate To Canada?</h1>
            <p>Keel connects you with Canada’s <span className="coloredHeading">best licensed immigration consultants.</span></p>
        </>
        
    },[activeComponents])

    return(
    <section className={container}>
        <div className="container">
            {
                isVisible?<CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg}/>:null
            }
            <div className="row align-center">
                <div className="col-md-6 col-12">
                    <div className="immigrateForm">
                        {renderHomeText()}
                        {/* <h1>Want To Immigrate <br/>
                            To <span>Canada?</span>
                        </h1>
                        <p>Keel connects you with Canada’s<span> best licensed immigration consultants.</span></p> */}
                        <div className="formContainer">
                            <div className="inputForm">
                                <input type="eamil" value={email} onChange={handleEmailChange} onKeyPress={handleEmailKeyPress}/>
                                <label className={email ? 'fillInput' : ''}>Enter your email id</label>
                            </div>
                            <div className="inputForm">
                                <input type="number" id="contactNo" value={contactNo} onChange={handleContactChange} onKeyPress={handleContactKeyPress}/>
                                <label className={contactNo ? 'fillInput' : ''}>Enter your contact number </label>
                            </div>
                            <button className="submitBtn" onClick={checkEligibility}>Check your Eligibility for Free</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="animatedGif">
                        <Image layout="responsive" src="https://getkeel.com/wp-content/uploads/2022/01/Feature-1.png" className="img-fluid" width={450} height={450} priority/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CheckEligibily;