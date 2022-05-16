import { useRouter } from 'next/router';

import { container } from './style.js';

const Services = ()=>{
    const router = useRouter();

    const handleCtaClick = ()=>{
        router.push('/eligibility');
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
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/service1.svg" />
                            <p>Express Entry Program</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/skill2.svg" />
                            <p>Federal Skilled Worker</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/skill3.svg" />
                            <p>Business Immigration</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/skill4.svg" />
                            <p>Provincial Nominee Programs</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/skill5.svg" />
                            <p>Sponsoring Your Family</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="servicCard">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/skill6.svg" />
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