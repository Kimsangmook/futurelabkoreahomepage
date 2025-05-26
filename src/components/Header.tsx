'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // 스크롤 내리면 헤더 숨기기
        setHidden(true);
      } else {
        // 스크롤 올리면 헤더 보이기
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[49px] bg-white shadow-sm z-30 transform transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex items-center h-full px-5">
        <Link href="/" className="flex items-center h-full">
          <img src="/BI.svg" alt="Future Lab Korea" className="h-[30px] w-auto" />
        </Link>
      </div>
    </header>
  );
}
