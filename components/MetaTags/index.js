import Head from 'next/head'

const MetaTags = ({metaInfo})=>{
    const { description, title, ogDescription, ogUrl}=metaInfo
    return(
        <Head>
            {
                description?<meta name="description" content={description}/>:null
            }
            {
                title?<>
                    <meta property="og:title" content={title}/>
                    <title>{title}</title>
                </>:null
            }
            {
                ogDescription?<meta property="og:description" content={ogDescription}/>:null
            }
            {
                ogUrl?<meta property="og:url" content={ogUrl}/>:null
            }
            <meta property="og:site_name" content="Keel"/>
            <meta property="og:image" content="http://getkeel.com/wp-content/uploads/2022/01/Feature-1.png"/>
        </Head>
    )
}

export default MetaTags;