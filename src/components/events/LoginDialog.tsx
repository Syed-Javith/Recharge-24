import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useState } from "react";

interface LoginDialogProps {
  textContent: Array<String>;
}

const LoginDialog = ({ textContent }: LoginDialogProps) => {
  const [open,setOpen] = useState<boolean>(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-2 border-white text-md bg-black mt-6"
            asChild
          >
            <span className="cursor-pointer">{textContent[0]}</span>
          </Button>
          {textContent.length > 1 && (
            <Button
              variant="outline"
              className="border-2 border-white text-md bg-black mt-6"
              asChild
            >
              <span className="cursor-pointer text-center">
                {textContent[1]}
              </span>
            </Button>
          )}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">Login to Continue</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            You have to be logged in to register for an event
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex gap-3 items-center">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-2 border-white text-md bg-black px-4"
                asChild
              >
                <span className="cursor-pointer">Login</span>
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

export default LoginDialog;
