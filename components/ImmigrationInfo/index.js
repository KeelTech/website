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
                        <Image width={655} height={281} className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/06/licensed.svg" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h2>Only Licensed Consultants</h2>
                        <p>No more ghost consultants ghosting you! </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h2>Don't Settle for the consultant "near you" </h2>
                        <p>Best advice from the comfort of your home! </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                        <Image width={655} height={281} className="img-fluid" src="http://getkeel.com/wp-content/uploads/2021/06/dont-settle.svg" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                        <Image width={655} height={281} className="img-fluid" src="http://getkeel.com/wp-content/uploads/2021/06/money-precious.svg" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h2>Your Money Is Precious </h2>
                        <p>Know your chances before starting your application </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgTextBlock">
                        <h2>Don't Run For Updates For Months </h2>
                        <p>End to end application management at one platform </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="immgImageBlock">
                        <Image width={655} height={281} className="img-fluid" src="http://getkeel.com/wp-content/uploads/2021/06/dont-riun.svg" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ImmigrationInfo;