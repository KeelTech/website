import { container } from './style.js';

const Testimonials = ()=>{

    return(
    <section className={container}>
        <div className="container">
            <div className="testiMainCont">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="testLeftHed">
                            <h5>TESTIMONIALS</h5>
                            <h4>Here's what our customers have to say.</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="testimSlder">
                            <div className="testiMoCard">
                                <p>
                                    I was fed up of the false promises of these local consultants. Finally a trusted
                                    platform with only quality consultants! </p>
                                    <div className="testiUsr">
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2021/05/close-up-handsome-male-fashion-model-face-with-bea-DCZ9NLF.jpg" />
                                        <p>Maddy</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials;