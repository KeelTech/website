import BlogsView from '@/components/BlogsView';
import { getBlogsList } from '@/actions/index.js';

const Blogs = ({ blogsList })=>{

    return(
        <BlogsView data={blogsList?.data||[]}/>
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