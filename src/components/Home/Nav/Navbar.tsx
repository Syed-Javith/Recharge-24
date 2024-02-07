// import Link from "next/link";
// import { FC } from "react";
// import { buttonVariants } from "../../ui/Button";
// import { getAuthSession } from "@/lib/auth";
// import UserAccountNav from "./UserAccountNav";


// interface NavbarProps {}

// const Navbar: FC<NavbarProps> = async ({}) => {
//   const session = await getAuthSession();
//   return (
//     <div className="sticky top-0 inset-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[1000] py-2">
//       <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
//         <Link href="/" className="flex gap-2 items-center">
//         <img
//           className="shadow-2xl  rounded-xl  z-10 neon-border "
//           id="about-img"
//           src="/logo1.webp"
//           alt=""
//           width={50}
//           height={50}
//         />
//           <p className="hidden text-zinc-700 text-sm font-medium md:block">
//             Recharge 24
//           </p>
//         </Link>

//         {session ? (
//             <UserAccountNav user={session} />
//         ) : (
//           <>
//             <Link href="/login" className={buttonVariants()}>
//               Log In
//             </Link>
//             <Link href="/register" className={buttonVariants()}>
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

'use client'

import React, { useEffect } from 'react'
import { UserJwtPayload } from "@/lib/auth";
import { usePathname } from "next/navigation"
import './Navbar.css'
import Link from 'next/link';
import { Menu } from 'lucide-react';

type SesstionType =  {
  session: UserJwtPayload | null
}

const Navbar = ({session} : SesstionType) => {

  const pathname = usePathname()

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
                    <li className={pathname=="/profile" ? "active" : "disabled"}><Link href="/profile">Profile</Link></li>
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