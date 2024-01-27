"use client"
import LoginForm from "@/components/forms/LoginForm";
import { getAuthSession } from "@/lib/auth";
import { CSRBaseUrl } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams , useRouter} from "next/navigation";
import { FC, useEffect } from "react";
import { toast } from "sonner";
interface pageProps {}

interface VerifyPasswordProp{
    email :string,
    token : string
}

const page: FC<pageProps> = async ({}) => {

const searchParams = useSearchParams();
  const router = useRouter();
  

    const { mutate : verifyPassword , isPending } = useMutation({
        mutationFn : async ({ email , token } : VerifyPasswordProp ) => {
            await axios.get(
                CSRBaseUrl + "/authenticate/forgot_password" ,
                {
                    params : {
                        email , token
                    }
                }
            )
        },
        onError : (err) => {
            console.log("error : " , err);
            
            if(err instanceof AxiosError){
                toast("Unable to confirm password")
            }else{
                toast("Something went wrong")
            }
        },
        onSuccess : (data) => {
            console.log("Verified " , data );
            // router.push("/login");
            router.replace("login");
            router.refresh();
        }
    })

    useEffect(()=>{
        const email = searchParams.get('email') as string;
        const token = searchParams.get('token') as string;
        verifyPassword({ email , token })
    })

    return (
        <div>
            {
                isPending ? <Loader2 className="animate-spin ml-2" /> : 
                <p>verified</p>
            }
        </div>
    )
}

export default page;