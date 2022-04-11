import PlanView from '@/components/PlanView';
import { getPlans } from '@/actions/index.js';

const Plans = ({plansList})=>{

    return(
        <PlanView plansList={plansList}/>
    )
}

export async function getServerSideProps(){
    const plansList =  await getPlans({})
    return {
        props: {
            plansList: plansList||[]
        }
    }
}

export default Plans;