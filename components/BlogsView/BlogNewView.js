import { useRouter } from 'next/router';

const BlogNewView = ({ blogsList, showHighlighted })=>{
    const router = useRouter()
    const data = blogsList?.data??[];

    const renderItem = (val)=>{
        const { blog_img, title, id, highlight } = val;
        let showWidget = true;
        if(showHighlighted){
            if(!highlight){
                showWidget = false;
            }
        }
        if(showWidget){
            return (<div className="blogGrid newWebBlog" key={id} onClick={() => router.push(`/blogs/${id}`)}>
                <img className="img-fluid" src={blog_img} alt="title" />
                <div className="rescGrdData">
                    <span>Canada</span>
                    <p>{title}</p>
                </div>
            </div>)
        }
        return null
    }
    return(
        <section className="resourceSection">
            <div className="container">
                <div className="resrcCont">
                    <div className="storyContent full-width">
                        <h4 className="grdHdng">Resources</h4>
                        <div className="subheadWithBtn">
                            <h5>Our <span>Blogs</span></h5>
                            {/* <button>See All <img className="img-fluid" src="/assets/arrowDark.svg" /></button> */}
                        </div>
                    </div>
                    <div className="blogGridsSection newBlogSection">
                        {
                            data.map((val, key)=>{
                                return renderItem(val);
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogNewView;