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
        <div class="scroreAccordionCont">
            {
                data.map((val, key)=>{
                    const { ques, ans } = val;
                    const showOption = activeList.indexOf(key)>-1;
                    return <div class={`accrdCard`}  key={key} onClick={()=>handleClick(key)}>
                    <button class={`course-accordion ${showOption?'active':''}`}>{ques}</button>
                    <div class="course-panel">
                        {
                            showOption?<p>{ans}</p>:null
                        }
                    </div>
                </div>
                })
            }
        </div>
    )
}

export default Accordian