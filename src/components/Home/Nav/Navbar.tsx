'use client'
import React, { useEffect, useState } from 'react'
import { UserJwtPayload } from "@/lib/auth";
import { usePathname } from "next/navigation"
import NavStyle from './Navbar.module.css'
import Link from 'next/link';
import { Menu } from 'lucide-react';
import LogoutDialog from './LogoutDialog';
import axios, { AxiosError } from 'axios';
import { CSRBaseUrl, inDevEnvironment } from '@/lib/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type SesstionType = {
  session: UserJwtPayload | null
}

const Navbar = ({ session }: SesstionType) => {

  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 690) {
        setMobNavActive(false)
      }
    })

    window.addEventListener('click', (event) => {
      if (!document.getElementById('ham-menu')?.contains(event.target as Node)) {
        setMobNavActive(false)
      }
    })
  }, [])

  const [isPending, setIsPending]= useState<boolean> (false);

  async function delay(milliseconds: number) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  }


  const logoutHandler = async () => {
    try {
      setIsPending(true)
      await delay(5000)
      await axios(CSRBaseUrl + "authenticate/logout/", {
        method: "POST",
        withCredentials: true,
      }
      )
      setIsPending(false)
      toast.success("Success", {
        description: "You were logged out successfully.",
      });
      router.push("/login");
      router.refresh();
    } catch(err) {
        setIsPending(false)
        if (err instanceof AxiosError) {
          toast.error(err.response?.data.detail ?? 'Invalid Request');
        } else {
          toast.error("Some error occurred. Please try again later.");
        }
    }
  };

  const [mobNavActive, setMobNavActive] = useState<boolean>(false);


  return (
    <header className={NavStyle.landing_header}>


      <Link href='/'>
        <img src="/Landing/college.webp" className={NavStyle.college} />
      </Link>
      <nav className={NavStyle.navbar_nav}>

        <Menu id='ham-menu' className={NavStyle.ham} onClick={
          () => {
            setMobNavActive(!mobNavActive)
          }} />


        <ul className={`${NavStyle.navbar_ul} ${mobNavActive ? NavStyle.dropdown_custom : ''}`}>
          <Link href="/">
            <li className={`${NavStyle.navbar_li} ${pathname == "/" ? NavStyle.active : NavStyle.disabled}`}>
                Home
            </li>
          </Link>
          <Link href="/proshow">
            <li className={`${NavStyle.navbar_li} ${pathname == "/proshow" ? NavStyle.active : NavStyle.disabled}`}>
              Proshows
            </li>
          </Link>
          {/* <li className={`${NavStyle.navbar_li} ${pathname == "/merchandise" ? NavStyle.active : NavStyle.disabled}`}>
            <Link href="/merchandise">
              Merchandise
            </Link>
          </li> */}
          <Link href="/event">
            <li className={`${NavStyle.navbar_li} ${pathname == "/event" || /\/event\/.*/.test(pathname) ? NavStyle.active : NavStyle.disabled}`}>
              Events
            </li>
          </Link>
          {session ?
            (
              <>
                <Link href="/profile">
                  <li className={`${NavStyle.navbar_li} ${pathname == "/profile" ? NavStyle.active : NavStyle.disabled}`}>
                    Profile
                  </li>
                </Link>
                <LogoutDialog logoutHandler={logoutHandler} isPending={isPending}/>
              </>

            ) :
            (
              <>
                <Link href='/login'>
                  <li className={`${NavStyle.navbar_li} ${pathname == "/login" ? NavStyle.active : NavStyle.disabled}`}>
                    Login
                  </li>
                </Link>
                <Link href="/register">
                  <li className={`${NavStyle.navbar_li} ${pathname == "/register" ? NavStyle.active : NavStyle.disabled}`}>
                    Register
                  </li>
                </Link>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar