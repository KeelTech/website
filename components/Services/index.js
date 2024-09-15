import { useRouter } from 'next/router';

import { container } from './style.js';

const Services = ()=>{
    const router = useRouter();

    const handleCtaClick = ()=>{
        router.push('/check-eligibility');
    }

    return(
    <section className={container}>
        <div className="container">
            <div className="serviceSection">
                <h1 className="blackSubHed">Our Services</h1>
                <p className="blackSubPera">Creating Global Citizens, Literally!</p>
                <div className="row">
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/service1.svg" alt="express entry"/>
                            <p>Express Entry Program</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/skill2.svg" alt="skiller workers"/>
                            <p>Federal Skilled Worker</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/skill3.svg" alt="Business Immigration"/>
                            <p>Business Immigration</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/skill4.svg" alt="Nominee Programs"/>
                            <p>Provincial Nominee Programs</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/skill5.svg" alt="Family Sponsoring"/>
                            <p>Sponsoring Your Family</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="/images/skill6.svg" alt="Experience Class"/>
                            <p>Canadian Experience Class</p>
                        </div>
                    </div>
                </div>
                <div className="serviceBtn">
                    <button onClick={handleCtaClick}>Check CRS Score</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services