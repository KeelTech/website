import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getPlanDetail } from '@/actions/index.js';

import CheckoutForm from './CheckoutForm.js';
import { container } from './style.js';

const ContactForm = ()=>{
    const router = useRouter();
    const [planDetails, setPlanDetails] = useState({});

    useEffect(()=>{
        let id;
        try{
            id = sessionStorage.getItem("selectedPlan");

        }catch{
            id=''
        }
        if(id){
            getPlanDetail({id}, (resp)=>{

                console.log(resp);
                if(resp){
                    setPlanDetails(resp);
                }
            })
        }else{
            showToaster(false, 'Please Select Plan first');
            setTimeout(() => {
                router.push('/plans');
            }, 3000);
        }
    },[])

    const { title='', price='' } = planDetails||{}


    return(
        <div className={container}>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <CheckoutForm/>
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
                                <td>₹{price}</td>
                            </tr>
                            <tr>
                                <td>Subtotal	</td>
                                <td>₹{price}</td>
                            </tr>
                            <tr>
                                <td><h5>Total</h5></td>
                                <td><h5>₹{price}</h5></td>
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

                                    <input type="radio" />

                                    <label for="">
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
                            <button type="submit" class="button alt" name="" id="place_order" value="Place order" data-value="Place order">Place order</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm