import Accordian from '@/components/Accordian';
import { INTRO_ACCORDIAN } from '@/actions/constant.js';

import { container, tableSection, combis } from './style.js';

const ApplicationPlatform = ()=>{

    return(
        <>
        <section className={container}>
            <div className="container">
                <h4 className="sectionSubHeading">End to End Immigration Application Platform
                </h4>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="platformImg">
                            <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2022/01/Feature-3.png" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="platformList">
                            <ul>
                                <li>
                                    <img className="img-fluid"
                                        src="https://getkeel.com/wp-content/uploads/2022/01/license-svgrepo-com-1.svg" />
                                    <div>
                                        <p>Only Licensed Consultants </p>
                                        <span>No more ghost consultants ghosting you!</span>
                                    </div>
                                </li>
                                <li>
                                    <img className="img-fluid"
                                        src="https://getkeel.com/wp-content/uploads/2022/01/no-step-svgrepo-com-1.svg" />
                                    <div>
                                        <p>Don't Settle for the consultant "near you" </p>
                                        <span>No more ghost consultants ghosting you! </span>
                                    </div>
                                </li>
                                <li>
                                    <img className="img-fluid"
                                        src="https://getkeel.com/wp-content/uploads/2022/01/8884838fb15f00484d61d641962ce96e-1.svg" />
                                    <div>
                                        <p>Your Money Is Precious </p>
                                        <span>Know your chances before starting your application </span>
                                    </div>
                                </li>
                                <li>
                                    <img className="img-fluid"
                                        src="https://getkeel.com/wp-content/uploads/2022/01/295293-1.svg" />
                                    <div>
                                        <p>Don't Run For Updates For Months </p>
                                        <span>End to end application management at one platform </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SalaryFormat />
        </>
    )
}

const SalaryFormat = ()=>{

    return(
    <>
    <section className={tableSection}>
        <div className="container">
            <h4 className="sectionSubHeading">Salary Comparison India vs Canada </h4>
            <div className="tableCont">
                <table>
                    <thead>
                        <tr>
                            <th>OCCUPATION</th>
                            <th>AV. CANADIAN SALARY </th>
                            <th>AV. INDIAN SALARY </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IT Engineers/Software Professionals</td>
                            <td>CAD 102,900</td>
                            <td>INR 6,00,000</td>
                        </tr>
                        <tr>
                            <td>Engineers</td>
                            <td>CAD 85,500</td>
                            <td>INR 3,60,000</td>
                        </tr>
                        <tr>
                            <td>Doctors</td>
                            <td>CAD 50,000</td>
                            <td>INR 7,58,000</td>
                        </tr>
                        <tr>
                            <td>Nurses</td>
                            <td>CAD 78,000</td>
                            <td>INR 2,98,000</td>
                        </tr>
                        <tr>
                            <td>Sales & Marketing</td>
                            <td>CAD 60,000</td>
                            <td>INR 6,00,000</td>
                        </tr>
                        <tr>
                            <td>Accounting</td>
                            <td>CAD 45,800</td>
                            <td>INR 2,49,000</td>
                        </tr>
                        <tr>
                            <td>Teachers</td>
                            <td>CAD 42,600</td>
                            <td>INR 3,00,000</td>
                        </tr>
                        <tr>
                            <td>Restaurant Managers</td>
                            <td>CAD 42,000</td>
                            <td>INR 4,14,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section className={combis}>
        <div className="container">
            <div className="faqSection">
                <h4 className="sectionSubHeading">Salary Comparison India vs Canada </h4>
                <p className="sectionSubHeading">Most frequent questions and answers </p>
                <Accordian data={INTRO_ACCORDIAN}/>
            </div>
        </div>
    </section>
    </>
    )
}

export default ApplicationPlatform