'use client'
import React, { useEffect } from 'react'
import { UserJwtPayload } from "@/lib/auth";
import { usePathname } from "next/navigation"
import NavStyle from './Navbar.module.css'
import Link from 'next/link';
import { Menu } from 'lucide-react';
import LogoutButton from './LogoutButton';

type SesstionType =  {
  session: UserJwtPayload | null
}

const Navbar = ({session} : SesstionType) => {

  const pathname = usePathname()

  console.log(pathname)

  useEffect(() => {
    document.getElementById('ul')?.classList.remove(NavStyle.dropdown_custom)
  }, [pathname]);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth>=690) {
        document.getElementById('ul')?.classList.remove(NavStyle.dropdown_custom)
      }
    })
    
    window.addEventListener('click', (event) => {
      if(!document.getElementById('ham')?.contains(event.target as Node)) {
        document.getElementById('ul')?.classList.remove(NavStyle.dropdown_custom)
      }
    })
  }, [])
  

  return (
    <header className={NavStyle.landing_header}>
        <img src="/Landing/college.webp" className={NavStyle.college}/>
        <nav className={NavStyle.navbar_nav}>

          <Menu className={NavStyle.ham} onClick={
              () => {
                if(document.getElementsByClassName(NavStyle.dropdown_custom).length==0)
                    document.getElementById('ul')?.classList.add(NavStyle.dropdown_custom)
                else
                    document.getElementById('ul')?.classList.remove(NavStyle.dropdown_custom)
              }} />


            <ul id="ul" className={NavStyle.navbar_ul}>
                <li className={ `${NavStyle.navbar_li} ${pathname=="/" ? NavStyle.active : NavStyle.disabled}`}>
                  <Link href="/">
                    Home
                  </Link>
                </li>    
                <li className={`${NavStyle.navbar_li} ${pathname=="/proshow" ? NavStyle.active : NavStyle.disabled}`}>
                  <Link href="/proshow">
                    Proshows
                  </Link>
                  </li>
                <li className={`${NavStyle.navbar_li} ${pathname=="/event" || /\/event\/.*/.test(pathname) ? NavStyle.active : NavStyle.disabled}`}>
                  <Link href="/event">
                    Events
                  </Link>
                  </li>
                <li className={`${NavStyle.navbar_li} ${pathname=="/gallery" ? NavStyle.active : NavStyle.disabled}` }>
                  Gallery
                  </li>

                {session ?
                  (
                   <>
                     <li className={`${NavStyle.navbar_li} ${pathname=="/profile" ? NavStyle.active : NavStyle.disabled}` }>
                      <a href="/profile">
                        Profile
                      </a>
                    </li>
                    <LogoutButton />
                   </>

                  ) :
                  (
                    <>
                      <li className={`${NavStyle.navbar_li} ${pathname=="/login" ? NavStyle.active : NavStyle.disabled}` }>
                        <Link href='/login'>
                          Login
                          </Link>
                        </li>
                      <li className={`${NavStyle.navbar_li} ${pathname=="/register" ? NavStyle.active : NavStyle.disabled}`}>
                        <Link href="/register">
                          Register
                        </Link>
                      </li>
                    </> 
                  )
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar