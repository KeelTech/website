import { container } from './style.js';

const ConsultingMember = ()=>{

    return(
    <section className={container}>
        <div className="container">
            <h4 className="sectionSubHeading text-center">Keel Immigration Consulting</h4>
            <p className="sectionSubHeading mb-60 text-center">This can be an eyecatching sub-header. And we can add more text to it.</p>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="keelImgCardCont">
                        <div className="row vr-gap-30">
                            <div className="col-md-6 col-12">
                                <div className="imgigCard">
                                    <h4>20,000+</h4>
                                    <p>Community Members</p>
                                    <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/1.jpg" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="imgigCard">
                                    <h4>20,000+</h4>
                                    <p>Community Members</p>
                                    <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/1.jpg" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="imgigCard">
                                    <h4>20,000+</h4>
                                    <p>Community Members</p>
                                    <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/1.jpg" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="imgigCard">
                                    <h4>20,000+</h4>
                                    <p>Community Members</p>
                                    <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/1.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="imgrRight">
                        <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/2-2-1024x576.jpg" />
                        <div className="imgrPrice">
                            <p>
                                <span>₹14,999.00</span>
                                ₹9,999.00
                            </p>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ConsultingMember