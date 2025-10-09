import Layout from '@/components/Layout'
import { AppWrapper } from '../context/index.js'; // import based on where you put it
import { getActiveComponents } from '@/actions/index.js';
import '../styles/global.css';
import '../styles/globalNew.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App(props){
    const { Component, pageProps } = props;

    useEffect(() => {
        TagManager.initialize({ gtmId: 'NXF24DB' });
    }, []);

    return (
    <AppWrapper>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </AppWrapper>
    )
}

// Removed getInitialProps to enable static optimization
// App.getInitialProps = async () => {
//       // calls page's `getInitialProps` and fills `appProps.pageProps`
//       const appProps = await getActiveComponents({});
//       return { dataProps: appProps }
// }