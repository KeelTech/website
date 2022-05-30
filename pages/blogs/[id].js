import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { getBlogDetail } from '@/actions/index.js';
import BlogsDetails from '@/components/BlogsDetailsView';

const BlogsDet = ()=>{
    const router = useRouter()
    const { id } = router.query
    const [blogData, setBlogData] = useState({});
    
    useEffect(()=>{
        getBlogDetail({id}, (resp)=>{
            if(resp?.data?.[0]){
                setBlogData(resp.data[0]);
                console.log(resp);
            }
        })
    },[])

    return(
        <BlogsDetails blogData={blogData}/>
    )
}


export default BlogsDet;