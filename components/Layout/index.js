import { useEffect, useState, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable'
import { useRouter } from 'next/router'

import Header from '@/components/Header';
import HeaderNew from '@/components/Header/HeaderNew';

import Footer from '@/components/Footer';
import FooterNew from '@/components/Footer/FooterNew';

import { useAppContext } from '@/context/index.js';

export default function Layout({ children, dataProps }) {
  const router = useRouter()
  const { setActiveComponent } = useAppContext();
  const [activeNav, setNav] = useState(false)

  const isNew = useMemo(()=>{
    return router.pathname.includes('new');
  },[])

  useEffect(()=>{
    if(dataProps){
        setActiveComponent(dataProps);
    }
  },[dataProps])

  const toggleNavBar = ()=>{
    setNav(val=>!val)
  }

  const closeNavBar = ()=>{
    setNav(false);
  }

  const handleSwipeLeft = ()=>{
    if(activeNav){
      toggleNavBar();
    }
  }
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: toggleNavBar,
  });
  return (
    <div {...handlers}>
      {
        isNew?<HeaderNew toggleNavBar={toggleNavBar} activeNav={activeNav}/>:<Header activeNav={activeNav} toggleNavBar={toggleNavBar} closeNavBar={closeNavBar}/>
      }
      <main>{children}</main>
      {isNew?<FooterNew/>:<Footer />}
    </div>
  )
}