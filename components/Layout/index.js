import { useEffect } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '@/context/index.js';

export default function Layout({ children, dataProps }) {
  const { setActiveComponent } = useAppContext();

  useEffect(()=>{
    if(dataProps){
        setActiveComponent(dataProps);
    }
  },[dataProps])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}