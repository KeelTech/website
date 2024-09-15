import BlogsView from '@/components/BlogsView';
import MetaTags from '@/components/MetaTags';

import { getBlogsList } from '@/actions/index.js';

const metaInfo = {
    description: 'Features Posts View More News Most Read Latest News',
    title: 'Blogs - Keel',
    ogDescription: "Features Posts View More News Most Read Latest News",
    ogUrl: "https://getkeel.com/blogs/"
}

const Blogs = ({ blogsList })=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <BlogsView data={blogsList?.data||[]}/>
        </>
       
    )
}

export async function getServerSideProps(){
    const blogsList =  await getBlogsList({})
    return {
        props: {
            blogsList
        }
    }
}


export default Blogs;