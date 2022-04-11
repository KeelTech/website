import { container } from './style.js';

const PlanView = ({ plansList })=>{

    return(
    <section className={container}>
        <div className="container">
            <div className="row">
                {
                    plansList.map((val, key)=>{
                        const { title, price } = val;
                        return <div className="col-md-4" key={key}>
                        <div className="serviceCards">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                            <div className="serviceCont">
                                <h4>{title}</h4>
                                <p><span></span> ₹{price}</p>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    </section>
    )
}

export default PlanView