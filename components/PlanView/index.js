import { container } from './style.js';

const PlanView = ()=>{

    return(
    <section class={container}>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="serviceCards">
                        <img class="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div class="serviceCont">
                            <h4>Keel All In One Consulting Plan</h4>
                            <p><span>₹99,999.00</span> ₹89,999.00</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="serviceCards">
                        <img class="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div class="serviceCont">
                            <h4>Keel All In One Consulting Plan</h4>
                            <p><span>₹99,999.00</span> ₹89,999.00</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="serviceCards">
                        <img class="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" />
                        <div class="serviceCont">
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