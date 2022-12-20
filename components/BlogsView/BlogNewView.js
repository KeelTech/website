

const BlogNewView = ({ blogsList })=>{
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
                    <div className="blogGridsSection">
                        {
                            data.map((val, key)=>{
                                const { blog_img, title } = val;

                                return <div className="blogGrid" key={key}>
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