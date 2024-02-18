import { Button } from "@/components/ui/Button";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { Loader2, LogOut } from "lucide-react";
  import Link from "next/link";
  import { useState } from "react";
  import NavStyle from './Navbar.module.css'
  
  interface LogoutDialogProps {
    logoutHandler:Function,
    isPending: boolean, 
  }
  
  const LogoutDialog = ({ logoutHandler, isPending }: LogoutDialogProps) => {
    const [open,setOpen] = useState<boolean>(false)
  
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <li className={`${NavStyle.navbar_li} ${NavStyle.disabled}`}>Logout</li>
          {/* <LogOut size={15} className='m-auto hover:cursor-pointer' /> */}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-left">Are you sure to logout?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex gap-4 items-center">
              <Link href="/login">
                <Button
                  disabled={isPending}
                  variant="outline"
                  className="border-2 border-white text-md bg-black px-4"
                  asChild
                  onClick={(event) => {
                    event.preventDefault();
                    if(!isPending) logoutHandler();
                  }}
                >
                  <span className="cursor-pointer">Logout {isPending && <Loader2 className="animate-spin ml-2" />}</span>
                </Button>
              </Link>
              <Button asChild onClick={()=>setOpen(false)}>
                <span className="cursor-pointer">Cancel</span>
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default LogoutDialog;
  