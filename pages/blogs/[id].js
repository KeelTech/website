import { getBlogDetail } from '@/actions/index.js';
import BlogsDetails from '@/components/BlogsDetailsView';

const BlogsDet = ({data})=>{
    
    return(
        <BlogsDetails blogData={data}/>
    )
}

export async function getServerSideProps(context) {
    const id = context?.params?.id??'';
    const resp = await getBlogDetail({id})
    if(resp?.data?.[0]){
        return {
            props:{
                data: resp.data[0]
            } 
        }
    }
    return {
        props: {
            data: {}
        }
    }
}


export default BlogsDet;