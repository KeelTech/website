import { useRouter } from 'next/router';

import { container } from './style.js';

const PlanView = ({ plansList })=>{
    const router = useRouter();

    const handleBuyNowClick = (id)=>{
        sessionStorage.setItem("selectedPlan", id);
        router.push('/checkout');
    }

    return(
    <section className={container}>
        <div className="container">
            <div className="row">
                {
                    plansList.map((val, key)=>{
                        const { title, price, id } = val;
                        return <div className="col-md-4" key={key}>
                        <div className="serviceCards">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/02/3-2-768x432.jpg" alt="plans"/>
                            <div className="serviceCont">
                                <h4>{title}</h4>
                                <p><span></span> ₹{price}</p>
                                <button onClick={()=>handleBuyNowClick(id)}>Buy Now</button>
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