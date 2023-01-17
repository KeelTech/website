import { useState, useImperativeHandle, forwardRef } from 'react';

const CheckoutForm = forwardRef((props, ref)=>{
    const { handlePlaceOrder } = props;
    const [dataParams, setDataParams] = useState({
        fName: '',
        lName: '',
        email: '',
        phoneNo: '',
    })
    const { fName, lName, email, phoneNo } = dataParams;

    const handleClick = (val)=>{
        setDataParams((oldVal)=>{
            return { ...oldVal, ...val}
        })
    }

    useImperativeHandle(ref, ()=>({
        submitData: ()=>{
            handlePlaceOrder(dataParams);
        }
    }))

    const handleEmailKeyPress = (e, key)=>{
        const target = e;
        if(key==='submit'){
            if(target.key==='Enter'){
                handlePlaceOrder(dataParams);
            }
        }else if(target.key=='Enter'){
            document.getElementById(key).focus();
        }
    }
    
    return(
        <div className="formContainer customPay">
            <div className="inputForm">
                <input type="text" value={fName} onChange={(e)=>handleClick({fName: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'lName')}/>
                <label className='fillInput'>First Name</label>
            </div>
            <div className="inputForm">
                <input type="text" value={lName} id="lName" onChange={(e)=>handleClick({lName: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'email')}/>
                <label className='fillInput'>Last Name</label>
            </div>
            <div className="inputForm">
                <input type="eamil" value={email} id="email" onChange={(e)=>handleClick({email: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'phoneNo')}/>
                <label className='fillInput'>Email Id</label>
            </div>
            <div className="inputForm">
                <input type="number" id="phoneNo" value={phoneNo} onChange={(e)=>handleClick({phoneNo: e.target.value})} onKeyPress={(e)=>handleEmailKeyPress(e, 'submit')}/>
                <label className='fillInput'>Contact Number </label>
            </div>
            {/* <button className="submitBtn" onClick={handleSubmit}>Submit</button> */}
        </div>
    )
})

export default CheckoutForm;