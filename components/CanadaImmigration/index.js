import { useRouter } from 'next/router';

import { container } from './style.js';

const CanadaImmigration = ()=>{

    const router = useRouter();

    const handleCtaClick = ()=>{
        router.push('/check-eligibility');
    }

    return(
    <section className={container}>
        <div className="container">
            <div className="row vr-gap-30 orderChange">
                <div className="col-md-6">
                    <div className="leftConttPanel">
                        <h3>Canada Immigrations</h3>
                        <p>Coming to Canada as an immigrant is an exciting opportunity. Canada is one of the top
                            countries in the world in which to work and to live. As one of the most popular immigration
                            destinations, Canada attracts immigrants from all over the world.
                        </p>
                        <p>Canada’s stable economy, high standard of living, educated population and low crime rates
                            make Canada a preferred destination for immigrants worldwide.The federal government is
                            aiming to bring a total of 341,000 permanent resident newcomers to Canada in 2021 then add
                            on hundreds of thousands more temporary residents! Why don’t you become one of them?
                        </p>
                        <button className="submitBtn" onClick={handleCtaClick}>Check CRS Score</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rightImagePanel">
                        <img className="img-fluid" src="/images/canadaFlag.svg" alt="immigration"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CanadaImmigration