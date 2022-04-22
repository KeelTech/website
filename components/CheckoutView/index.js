import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script'

import { validateEmail } from '@/helpers/utils.js';
import { handleCheckout, getPlanDetail } from '@/actions/index.js';
import CustomToaster from '@/components/CustomToaster';

import CheckoutForm from './CheckoutForm.js';
import { container } from './style.js';

const ContactForm = ()=>{
    const router = useRouter();
    const submitRef = useRef();
    const [planDetails, setPlanDetails] = useState({});
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;
    const { title='', price='' } = planDetails||{}


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

    useEffect(()=>{
        let id;
        try{
            id = sessionStorage.getItem("selectedPlan");

        }catch{
            id=''
        }
        if(id){
            getPlanDetail({id}, (resp)=>{
                if(resp){
                    setPlanDetails(resp);
                }
            })
        }else{
            showToaster(false, 'Please Select Plan first');
            setTimeout(() => {
                router.push('/plans');
            }, 1000);
        }
    },[])

    const handleClick = ()=>{
        submitRef.current.submitData();
    }

    const redirectToRazorPay = (orderId, userInfo)=>{
        const { email, first_name, last_name, amount, phone_number } = userInfo;
        const options = {
            "key": "rzp_live_SHoE722sQX5Zzg", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                router.push('/success');
            },
            "prefill": {
                "name": `${first_name} ${last_name}`,
                email,
                "contact": phone_number
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#c32020"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
            console.log(response.error);
            showToaster(false, response.error.reason);
        });
        rzp1.open();
    }

    const handlePlaceOrder = (val)=>{
        const { fName, lName, email, phoneNo } = val;
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
            first_name: fName,
            last_name: lName,
            phone_number: phoneNo,
            email,
            amount: price,
            currency: "INR"
        }
        handleCheckout(postParams).then((resp)=>{
            if(resp && resp.order_id){
                redirectToRazorPay(resp.order_id, postParams);
                showToaster(true, 'Details Saved Successfully, we will get back to you.');
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
        <section className={container}>
            <div className="container"  >
            {
                isVisible?<CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg}/>:null
            }
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder} ref={submitRef}/>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='orderBox'>
                        <h3>Your Order</h3>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                            <tr>
                                <td>{title}</td>
                                <td><span className='rupSymb'>₹</span> {price}</td>
                            </tr>
                            <tr>
                                <td>Subtotal	</td>
                                <td><span className='rupSymb'>₹</span> {price}</td>
                            </tr>
                            <tr>
                                <td><h5>Total</h5></td>
                                <td><h5><span className='rupSymb'>₹</span> {price}</h5></td>
                            </tr>
                        </table>
                    </div>
                    <div className='couponBox'>
                        <p>Have a coupon? <span>Click here to enter your coupon code</span></p>
                    </div>
                    <div id="payment" class="woocommerce-checkout-payment">
                        <ul class="">
                            <li class="">
                                <div className='payRadio'>
                                    <label>
                                        Credit Card/Debit Card/NetBanking <img src="https://cdn.razorpay.com/static/assets/logo/payment.svg" alt="Credit Card/Debit Card/NetBanking" />
                                    </label>

                                </div>
                                <div class="payment_box ">
                                    <p>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</p>
                                </div>
                            </li>
                        </ul>
                        <div class="razorPay">

                            <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                                <a href="https://getkeel.com/privacy-policy/" class="" target="_blank">privacy policy</a>.</p>
                            <button type="submit" class="button alt" name="" id="place_order" value="Place order" data-value="Place order" onClick={handleClick}>Place order</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ContactForm