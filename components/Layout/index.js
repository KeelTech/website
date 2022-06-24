import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '@/context/index.js';

export default function Layout({ children, dataProps }) {
  const { setActiveComponent } = useAppContext();
  const [activeNav, setNav] = useState(false)

  useEffect(()=>{
    if(dataProps){
        setActiveComponent(dataProps);
    }
  },[dataProps])

  const toggleNavBar = ()=>{
    setNav(val=>!val)
  }

  const handlers = useSwipeable({
    onSwipedLeft: ()=>toggleNavBar(),
    onSwipedRight: ()=>toggleNavBar(),
  });

  return (
    <div {...handlers}>
      <Header activeNav={activeNav} toggleNavBar={toggleNavBar}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}