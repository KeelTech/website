import Image from 'next/image'
import { useRouter } from 'next/router';

import { container } from './style.js';

const CRSScore = ()=>{

    const router = useRouter();

    const handleCtaClick = ()=>{
        router.push('/check-eligibility');
    }

    return (
    <section className={container}>
        <div className="container">
            <h2 className="subHeadings">Fastest application preparation on the planet.<br/>Promise</h2>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="getStrtBtn">
                        <h4>How do I get started?</h4>
                        <button onClick={handleCtaClick}>Check CRS Score</button>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="listEmlText">
                        <ul>
                            <li>
                                <Image width={35} height={35} className="img-fluid"
                                    src="https://getkeel.com/wp-content/uploads/2021/06/Step-1.svg" />
                                <p>Check your eligibility and book a free counselling session</p>
                            </li>
                            <li>
                                <Image width={48} height={48} className="img-fluid"
                                    src="https://getkeel.com/wp-content/uploads/2021/06/step-2.svg" />
                                <p>Get on a call with a licensed Canadian immigration consultant to understand your
                                    options</p>
                            </li>
                            <li>
                                <Image width={48} height={48} className="img-fluid"
                                    src="https://getkeel.com/wp-content/uploads/2021/06/step-3.svg" />
                                <p>Get matched with the best expert consultant personalized to your application needs
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CRSScore;