import { useRef } from 'react';
import Head from 'next/head'

const IELTS = () => {
    const otpFormRef = useRef();

    return (
        <>
            <Head>
                <title>Refund Policy </title>
            </Head>
            <section>
            <div className="container">
                <div class="termsCond" style={{minHeight:'50vh'}}>
                    <h1>Refund Policy</h1>
                    <p>
                        The refund policy is based on the product/services that you buy from “GetKeel Migration Services Inc” and will be executed based on the terms of the contract you signed with getkeel Migration Services Inc. All requests will be entertained based on the terms of the contract only and unless until specified on the terms of the contract, Getkeel Migration Services Inc is not liable to provide any kind of refund.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default IELTS;