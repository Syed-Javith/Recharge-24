import { CSRBaseUrl, inDevEnvironment } from '@/lib/utils';
import axios from 'axios';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const LogoutButton = () => {
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
    <li
    onClick={(event) => {
        event.preventDefault();
        logoutHandler();
      }}
    >
      <LogOut size={20} />
    </li>
  )
}

export default LogoutButton
