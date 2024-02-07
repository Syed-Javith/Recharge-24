'use client'
import React, { useEffect, useState } from 'react'
import { UserJwtPayload } from "@/lib/auth";
import { usePathname } from "next/navigation"
import NavStyle from './Navbar.module.css'
import Link from 'next/link';
import { Menu } from 'lucide-react';
import LogoutDialog from './LogoutDialog';
import axios from 'axios';
import { CSRBaseUrl, inDevEnvironment } from '@/lib/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type SesstionType =  {
  session: UserJwtPayload | null
}

const Navbar = ({session} : SesstionType) => {

  const pathname = usePathname()
  const router = useRouter()

  // console.log(pathname)

  // useEffect(() => {
  //   setMobNavActive(false)
  // }, [pathname]);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth>=690) {
        setMobNavActive(false)
      }
    })
    
    window.addEventListener('click', (event) => {
      if(!document.getElementById('ham-menu')?.contains(event.target as Node)) {
        setMobNavActive(false)
      }
    })
  }, [])


  const logoutHandler = async () => {
    await axios(CSRBaseUrl + "authenticate/logout/", {
      withCredentials: true,
      method: "post",
    });

    toast("Success", {
      description: "You were logged out successfully.",
    });
    console.log("inDevEnv", inDevEnvironment);
    router.push("/login");
    router.refresh();
  };

  const [mobNavActive, setMobNavActive] = useState<boolean>(false);
  

  return (
    <header className={NavStyle.landing_header}>

        

        <img src="/Landing/college.webp" className={NavStyle.college}/>
        <nav className={NavStyle.navbar_nav}>

          <Menu id='ham-menu' className={NavStyle.ham} onClick={
              () => {
                setMobNavActive(!mobNavActive)
              }} />


            <ul className={`${NavStyle.navbar_ul} ${mobNavActive ? NavStyle.dropdown_custom : ''}`}>
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
                {/* <li className={`${NavStyle.navbar_li} ${pathname=="/gallery" ? NavStyle.active : NavStyle.disabled}` }>
                  Gallery
                  </li> */}

                {session ?
                  (
                   <>
                     <li className={`${NavStyle.navbar_li} ${pathname=="/profile" ? NavStyle.active : NavStyle.disabled}` }>
                      <a href="/profile">
                        Profile
                      </a>
                    </li>
                    <LogoutDialog logoutHandler={logoutHandler}/>
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