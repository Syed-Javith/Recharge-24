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

interface LoginDialogProps {
  textContent: Array<String>;
}

const LoginDialog = ({ textContent }: LoginDialogProps) => {
  return (
    <AlertDialog>
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
          <AlertDialogTitle>Login to Continue</AlertDialogTitle>
          <AlertDialogDescription>
            You have to be logged in to register for an event
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex gap-3">
            <AlertDialogAction>
              <Link href="/login">Login Now</Link>
            </AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginDialog;
