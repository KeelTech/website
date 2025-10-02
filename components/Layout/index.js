import { useEffect, useState, useMemo } from 'react';
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

  const isNew = true
  // useMemo(()=>{
  //   return router.pathname.includes('new');
  // },[])

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

  // Native touch events for better performance
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          // Swiped left
          if (activeNav) {
            toggleNavBar();
          }
        } else {
          // Swiped right
          toggleNavBar();
        }
      }
    };
    
    document.addEventListener('touchend', handleTouchEnd, { once: true });
  };

  return (
    <div onTouchStart={handleTouchStart}>
      {
        isNew?<HeaderNew toggleNavBar={toggleNavBar} activeNav={activeNav}/>:<Header activeNav={activeNav} toggleNavBar={toggleNavBar} closeNavBar={closeNavBar}/>
      }
      <main>{children}</main>
      {isNew?<FooterNew/>:<Footer />}
    </div>
  )
}