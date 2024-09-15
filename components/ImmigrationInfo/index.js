import Image from 'next/image'

import { container } from './style.js';

const ImmigrationInfo = ()=>{

    return (
    <section className={container}>
        <div className="container">
            <h2 className="subHeadings">All in one Immigration Application Platform
            </h2>
            <div className="row vr-gap-50">
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                        <img className="img-fluid" src="/Frame5.svg" alt="eligibility"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h3>Only Licensed Consultants</h3>
                        <p>No more ghost consultants ghosting you! </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h3>Don't Settle for the consultant "near you" </h3>
                        <p>Best advice from the comfort of your home! </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                        <img className="img-fluid" src="/Frame2.svg" alt="eligibility"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                    <img className="img-fluid" src="/Frame3.svg" alt="eligibility"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h3>Your Money Is Precious </h3>
                        <p>Know your chances before starting your application </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h3>Don't Run For Updates For Months </h3>
                        <p>End to end application management at one platform </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                    <img className="img-fluid" src="/Frame4.svg" alt="eligibility"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ImmigrationInfo;