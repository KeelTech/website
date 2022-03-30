import { container } from './style.js';

const PlanView = ()=>{

    return(
    <section className={container}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="serviceCards">
                        <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div className="serviceCont">
                            <h4>Keel All In One Consulting Plan</h4>
                            <p><span>₹99,999.00</span> ₹89,999.00</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serviceCards">
                        <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div className="serviceCont">
                            <h4>Keel All In One Consulting Plan</h4>
                            <p><span>₹99,999.00</span> ₹89,999.00</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serviceCards">
                        <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div className="serviceCont">
                            <h4>Keel All In One Consulting Plan</h4>
                            <p><span>₹99,999.00</span> ₹89,999.00</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PlanView