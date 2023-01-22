import Layout from '@/components/Layout'
import { AppWrapper } from '../context/index.js'; // import based on where you put it
import { getActiveComponents } from '@/actions/index.js';
import '../styles/global.css';
import '../styles/globalNew.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App(props){
    const { Component, pageProps, dataProps } = props;

    useEffect(() => {
        TagManager.initialize({ gtmId: 'NXF24DB' });
    }, []);

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