"use client";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../ui/DropdownMenu";
import Link from "next/link";
import { UserJwtPayload } from "@/lib/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Avatar, AvatarFallback } from "../../ui/Avatar";
import { CSRBaseUrl, inDevEnvironment } from "@/lib/utils";

interface UserAccountNavProps {
  user: UserJwtPayload;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  const { id, first_name, last_name } = user;
  const router = useRouter();
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="bg-slate-950 p-0.5">
          <AvatarFallback>{first_name[0] + last_name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {first_name && (
              <p className="font-medium">{first_name + " " + last_name}</p>
            )}
            {id && <p>{id}</p>}
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/proshow">Proshows</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/merchandise">Merchandise</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/event">Events</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            logoutHandler();
          }}
          className="cursor-pointer"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
