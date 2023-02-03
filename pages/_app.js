import Layout from '@/components/Layout'
import { AppWrapper } from '../context/index.js'; // import based on where you put it
import { getActiveComponents } from '@/actions/index.js';
import '../styles/global.css';
import '../styles/globalNew.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App(props){
    const { Component, pageProps, dataProps } = props;

    // useEffect(() => {
    //   //  TagManager.initialize({ gtmId: 'NXF24DB' });
    //   console.log("doc", $(document));
    //   $(document ).ready(function() {
    //     console.log( "ready!" );
    //     const script = document.createElement('script');
    //     const scriptInfo = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //     })(window,document,'script','dataLayer','GTM-NXF24DB');`
    //     script.innerHTML=scriptInfo;
        
    //     const noScriptTag = document.createElement('script');
    //     noScriptTag.src=`https://www.googletagmanager.com/ns.html?id=GTM-NXF24DB`;
    //     document.body.append(script);
    //     document.body.append(noScriptTag);
    //   });

      
    // }, []);

    return (
    <AppWrapper>
        <Layout dataProps={dataProps}>
            <Component {...pageProps}/>
        </Layout>
    </AppWrapper>
    )
}

App.getInitialProps = async () => {
      // calls page's `getInitialProps` and fills `appProps.pageProps`
      const appProps = await getActiveComponents({});
      return { dataProps: appProps }
}