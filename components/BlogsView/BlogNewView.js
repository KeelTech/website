import { useRouter } from 'next/router';

const BlogNewView = ({ blogsList })=>{
    const router = useRouter()
    const data = blogsList?.data??[];
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
                                const { blog_img, title, id } = val;

                                return <div className="blogGrid newWebBlog" key={key} onClick={() => router.push(`/blogs/${id}`)}>
                                <img className="img-fluid" src={blog_img} alt="title" />
                                <div className="rescGrdData">
                                    <span>Canada</span>
                                    <p>{title}</p>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogNewView;