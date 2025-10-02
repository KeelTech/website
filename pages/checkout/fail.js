import { useRouter } from 'next/router';
const SuccessFail = () => {
    const router = useRouter();
    return (
        <section className="failPayment">
            <div className="container">
                <div className='afterPayMessage'>
                    <img className='img-fluid successImg' src={"/images/right.svg"} alt="time" />
                    <svg className='failImg' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2321 5.21777L5.23212 15.2178" stroke="#343A40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.23212 5.21777L15.2321 15.2178" stroke="#343A40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h3>Transaction Failed</h3>
                    <p>Please try again later, or contact our helpline no</p>
                    <button onClick={()=>router.push('/')}>Back to Home page</button>
                </div>
            </div>
        </section>
    )
}

export default SuccessFail