import { useRef, useState } from 'react';
import { useRouter } from "next/router";

import { createLeadSquareLead } from '@/actions';
import { LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY, LEAD_SQUARED_X_API } from '@/actions/constant.js';
import CustomToaster from '@/components/CustomToaster';

const CommunityForm = ()=>{
    var router = useRouter();
    var utm_medium = router.query["utm_medium"]||"";
    var utm_source = router.query["utm_source"]||"";
    var utm_campaign = router.query["utm_campaign"]||"";

    const [val, setValues] = useState({
        name: '', mobile: '', email: '', grade:'', school: '', city: '', state: '', pincode: '', interestedInSettingCanada: ''
    });
    const { name, mobile, email, grade, school, city, state, pincode, interestedInSettingCanada} = val;


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

    const setVal = (newVal)=>{
        setValues((oldVal)=>{
            return {...oldVal, ...newVal}
        })
    }

    const createLead = ()=>{
        //LEAD_SQUARED_ACCESS_ID, LEAD_SQUARED_SECRET_KEY
        if(!name || !mobile || !email || ! grade || !school || !city || !state || !pincode || !interestedInSettingCanada){
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
            "x-api-key": LEAD_SQUARED_X_API,
            mode: 'no-cors',
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
                "Attribute": "Grade",
                "Value": grade
            },
            {
                "Attribute": "School",
                "Value": school
            },
            {
                "Attribute": "mx_City",
                "Value": city
            },
            {
                "Attribute": "mx_State",
                "Value": state
            },
            {
                "Attribute": "Pincode",
                "Value": pincode
            },
            {
                "Attribute": "InterestedInSettingCanada",
                "Value": interestedInSettingCanada
            },
            {
                "Attribute": "source",
                "Value": utm_source?utm_source:"web"
            },
            {
                "Attribute": "sourceMedium",
                "Value": utm_medium
            },
            {
                "Attribute": "sourceCampaign",
                "Value": utm_campaign
            },
            {
                "Attribute": "Origin",
                "Value": 'community'
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
            }, 2000);
            setData({
                number: '',
                otp: '',
                loading: false,
                name: '',
                age: '',
                gender: '',
                email: '',
                numberVerified: false,
                lastVerifiedNumber: '',
                disableSendOtp: false
            })
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

    const mobileRef = useRef(null);
    const gradeRef = useRef(null)
    const emailRef = useRef(null);
    const schooleRef = useRef(null)
    const cityRef = useRef(null)
    const stateRef = useRef(null)
    const pincodeRef = useRef(null)

    const handleKeyPress = (e, refKey) => {
        const key = e.key;
        if (key == 'Enter') {
            refKey.current.focus();
        }
    } 

    return(
        <>
        <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
        <div className="communityForm">
            <div className="comFomCont">
                <div className="cmForm">
                    <div className="inputForm"><input type="text" className={name?'activeInput':''} value={name} onChange={(e)=>setVal({name:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, mobileRef)}/><label>Full Name</label></div>

                    <div className="inputForm"><input type="number" ref={mobileRef} className={mobile?'activeInput':''} value={mobile} onChange={(e)=>setVal({mobile:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, emailRef)}/><label>Contact Number</label></div>

                    <div className="inputForm"><input type="email" ref={emailRef} className={email?'activeInput':''} value={email} onChange={(e)=>setVal({email:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, gradeRef)}/><label>Email</label></div>

                    <div className="inputForm"><input type="text" ref={gradeRef} className={grade?'activeInput':''} value={grade} onChange={(e)=>setVal({grade:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, schooleRef)}/><label>Grade/Class(1st year ...)</label></div>

                    <div className="inputForm"><input type="text" ref={schooleRef} className={school?'activeInput':''} value={school} onChange={(e)=>setVal({school:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, cityRef)}/><label>University/School</label></div>

                    <div className="inputForm"><input type="text" ref={cityRef} className={city?'activeInput':''} value={city} onChange={(e)=>setVal({city:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, stateRef)}/><label>City</label></div>

                    <div className="inputForm"><input type="text" ref={stateRef} className={state?'activeInput':''} value={state} onChange={(e)=>setVal({state:e.target.value})} onKeyPress={(e)=>handleKeyPress(e, pincodeRef)}/><label>State</label></div>

                    <div className="inputForm"><input type="text" ref={pincodeRef} className={pincode?'activeInput':''} value={pincode} onChange={(e)=>setVal({pincode:e.target.value})}/><label>Pincode</label></div>
                </div>
                <div className="radioCheck">
                    <p>Are you interested in studying/settling abroad? </p>
                    <div className="chkCont">
                        <div className="customCheck">
                            <label className="checkBoxContainer">
                                <p>Yes</p>
                                <input type="radio" name="radio" value="yes" onChange={(e)=>setVal({interestedInSettingCanada:e.target.value})}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="customCheck">
                            <label className="checkBoxContainer">
                                <p>No</p>
                                <input type="radio" name="radio" value="no" onChange={(e)=>setVal({interestedInSettingCanada:e.target.value})}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="cmSubmit" onClick={createLead}>Send</button>
            </div>
        </div>
        </>
    )
}

export default CommunityForm;