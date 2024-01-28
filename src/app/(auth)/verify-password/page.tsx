"use client"
import LoginForm from "@/components/forms/LoginForm";
import { getAuthSession } from "@/lib/auth";
import { CSRBaseUrl } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams , useRouter} from "next/navigation";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";
interface pageProps {}

interface VerifyPasswordProp{
    email :string,
    token : string
}

const Page: FC<pageProps> = ({}) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
  
    const { mutate: verifyPassword, isPending } = useMutation({
      mutationFn: async ({ email, token }: VerifyPasswordProp) => {
        await axios.get(
          CSRBaseUrl + "authenticate/forgot_password",
          {
            params: {
              email, token
            }
          }
        )
      },
      onError: (err) => {
        setError(true);
        console.log("error : ", err);
  
        if (err instanceof AxiosError) {
          toast.error(err.response?.data.detail ?? 'Invalid Request')
        } else {
          toast.error("Something went wrong")
        }
      },
      onSuccess: (data) => {
        setSuccess(true);
        toast.success("Password Reset Success");
        router.replace("login");
        router.refresh();
      }
    });
  
    useEffect(() => {
      const email = searchParams.get('email') as string;
      const token = searchParams.get('token') as string;
      verifyPassword({ email, token });
    }, []);
  
    return (
      <div>
        {
          (isPending) ? <Loader2 className="animate-spin mx-auto mt-[25%]" size={40} /> :
  
            success ? <> </> :
  
              !error ? <p className="text-center mt-[25%]">Processing...</p> :
  
                <p className="mx-auto mt-[25%]">Password Reset Failure. Try again.</p>
        }
      </div>
    )
  }
  
  export default Page;