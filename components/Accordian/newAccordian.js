import { useState } from 'react';

const Accordian = ({ data })=>{
    const [activeList, setActiveList] = useState([]);

    const handleClick = (key)=>{
        const found = false;
        let newList = activeList.filter((x)=>{
            if(x===key){
                found = true;
                return false
            }
            return true
        })
        if(!found){
            newList.push(key);
        }
        setActiveList(newList);
    }

    return(
        <div className="acrdnGridsCont">
            {
                data.map((val, key)=>{
                    const { ques, ans, isHtml } = val;
                    const showOption = activeList.indexOf(key)>-1;
                    return <div className={`acrdGrd ${showOption?'acrdAct':''}`}  key={key} onClick={()=>handleClick(key)}>
                    <h3>{ques}
                        <span> <img className="img-fluid" src="/assets/acrdIco.svg" /></span>
                    </h3>
                    {
                        isHtml?<p><div dangerouslySetInnerHTML={{__html: ans}} /></p>:<p>{ans}</p>
                    }
                </div>
                })
            }
        </div>
    )
}

export default Accordian