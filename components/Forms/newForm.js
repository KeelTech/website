import NumberVerification from './NumberVerification.js';

const NewForm = ()=>{

    return (
        <div className="container">
            <div className="formMain">
                <div className="formInputMain">
                    <div className="inputForm">
                        <input type="text" />
                        <label>Full Name</label>
                    </div>
                    <NumberVerification />
                    <div className="inputForm">
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className="inputForm">
                        <textarea></textarea>
                        <label>Message</label>
                    </div>
                    <button className="submitBtn">Send</button>
                </div>
            </div>
        </div>
    )
}

export default NewForm;