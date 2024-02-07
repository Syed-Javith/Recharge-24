'use client'
import React, { useEffect } from 'react'
import { UserJwtPayload } from "@/lib/auth";
import { usePathname } from "next/navigation"
import './Navbar.css'
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

  useEffect(() => {
    document.getElementById('ul')?.classList.remove('dropdown-custom')
  }, [pathname]);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth>=690) {
        document.getElementById('ul')?.classList.remove('dropdown-custom')
      }
    })
    
    window.addEventListener('click', (event) => {
      if(!document.getElementById('ham')?.contains(event.target as Node)) {
        document.getElementById('ul')?.classList.remove('dropdown-custom')
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
  

  return (
    <header id='landing-header'>
        <img src="/Landing/college.webp" id="college" />
        <nav>

          <Menu id="ham" onClick={
              () => {
                if(document.getElementsByClassName('dropdown-custom').length==0)
                    document.getElementById('ul')?.classList.add('dropdown-custom')
                else
                    document.getElementById('ul')?.classList.remove('dropdown-custom')
              }} />


            <ul id="ul">
                <li><Link className={pathname=="/" ? "active" : "disabled"} href="/">Home</Link></li>    
                <li className={pathname=="/proshow" ? "active" : "disabled"}><Link href="/proshow">Proshows</Link></li>
                <li className={pathname=="/event" || /\/event\/.*/.test(pathname) ? "active" : "disabled"}><Link href="/event">Events</Link></li>
                <li className={pathname=="/gallery" ? "active" : "disabled"}>Gallery</li>

                {session ?
                  (
                   <>
                     <li className={pathname=="/profile" ? "active" : "disabled"}><a href="/profile">Profile</a></li>
                    <LogoutDialog logoutHandler={logoutHandler}/>
                   </>

                  ) :
                  (
                    <>
                      <li className={pathname=="/login" ? "active" : "disabled"}><Link href='/login'>Login</Link></li>
                      <li className={pathname=="/register" ? "active" : "disabled"}><Link href="/register">Register</Link></li>
                    </> 
                  )
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar