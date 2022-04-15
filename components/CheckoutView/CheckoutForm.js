import { useState } from 'react';

import { validateEmail } from '@/helpers/utils.js';
import { handleCheckout } from '@/actions/index.js';
import CustomToaster from '@/components/CustomToaster';


const CheckoutForm = ()=>{

    const [dataParams, setDataParams] = useState({
        fName: '',
        lName: '',
        email: '',
        phoneNo: '',
    })
    const { fName, lName, email, phoneNo } = dataParams;

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;

    const handleClick = (val)=>{
        setDataParams((oldVal)=>{
            return { ...oldVal, ...val}
        })
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
        }, 2000);
    }

    const handleEmailKeyPress = (e, key)=>{
        const target = e;
        if(key==='submit'){
            if(target.key==='Enter'){
                handleSubmit();
            }
        }else if(target.key=='Enter'){
            document.getElementById(key).focus();
        }
    }

    const handleSubmit = ()=>{
        if(!fName){
            showToaster(false, 'Please enter valid First name')
            return;
        }
        if(!email){
            showToaster(false, 'Please enter valid email')
            return;
        }
        if(!validateEmail(email)){
            showToaster(false, 'Please enter valid email')
            return;
        }
        if(!phoneNo){
            showToaster(false, 'Please enter valid phone number')
            return;
        }
        const postParams = {
            firstname: fName,
            lastname: lName,
            phone_numbeer: phoneNo,
            email
        }
        handleCheckout(postParams).then((resp)=>{
            console.log(resp);
            if(resp){
                showToaster(true, 'Details Saved Successfully, we will get back to you.');
                setDataParams({
                    "fName" : "",
                    "email" : "",
                    "phoneNo" : "",
                    "lName" : ""
                })
            }else{
                console.error('failed to create checkout lead', resp);
                showToaster(false, 'Failed to save details, Please try again later');
            }
        }).catch((e)=>{
            console.error(e);
            showToaster(false, 'Failed to save details, Please try again later');
        })
    }
    
    return(
        <div className="formContainer customPay">
            {
                isVisible?<CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg}/>:null
            }
            <div className="inputForm">
                <input type="text" value={fName} onChange={(e)=>handleClick({fName: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'lName')}/>
                <label className='fillInput'>First Name id</label>
            </div>
            <div className="inputForm">
                <input type="text" value={lName} id="lName" onChange={(e)=>handleClick({lName: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'email')}/>
                <label className='fillInput'>Last Name</label>
            </div>
            <div className="inputForm">
                <input type="eamil" value={email} id="email" onChange={(e)=>handleClick({email: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'phoneNo')}/>
                <label className='fillInput'>Enter your email id</label>
            </div>
            <div className="inputForm">
                <input type="number" id="phoneNo" value={phoneNo} onChange={(e)=>handleClick({phoneNo: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'submit')}/>
                <label className='fillInput'>Enter your contact number </label>
            </div>
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CheckoutForm;