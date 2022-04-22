import { css } from '@emotion/css';

export const container = css`
.formContainer.customPay {border: 1px solid #ebebeb;padding: 30px;border-radius: 4px;margin: 0;}

.orderBox {border: 1px solid #ebebeb;
    padding: 12px;
    border-radius: 4px;}

.orderBox h3 {font-size: 16px;font-weight: 600;margin-bottom: 10px;}

.orderBox table {text-align: left;}

.orderBox table th {font-size: 14px;font-weight: 600;padding: 10px 0px;}

.orderBox table td {font-size: 14px;
    font-weight: 500;
    padding: 10px 0px;color: #000000c9;}

.orderBox table h5 {font-size: 18px;font-weight: 600;}

.couponBox {border: 1px solid #ebebeb;
    padding: 12px;
    border-radius: 4px;margin: 20px 0px;}

p {}

.couponBox p {font-size: 14px;}

.couponBox p span {color: #03a9f4;cursor: pointer;}

div#payment {border: 1px solid #ebebeb;
    padding: 12px;
    border-radius: 4px;
    }

div#payment ul {list-style: none;}

ul {}

div#payment ul li {gap: 20px;}

.payRadio {display: flex;}

.payRadio lable {display: flex;flex-direction: column;}

.payRadio label {display: flex;flex-direction: column;gap: 10px;}

.payRadio input {padding: 30px 20px;margin: 6px 0px;}

.payment_box {background: #d5d5d5;padding: 12px;font-size: 14px;margin: 10px 0;}

.razorPay p {font-size: 14px;}

.razorPay button {background: #429cff;color: white;border: none;width: 100%;padding: 10px 0;margin-top: 20px;}
`