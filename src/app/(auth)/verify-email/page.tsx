'use client';


import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react'
import { toast } from 'sonner';
import { CSRBaseUrl } from "@/lib/utils";


type VerificationDetails = {
  email : string,
  token : string,
}


const Verify:FC = () => {

  const searchParams = useSearchParams();
  const router = useRouter();

  const {mutate: verify, isPending} = useMutation({
    mutationFn : async ( details : VerificationDetails) => {
      await axios.get(CSRBaseUrl + 'authenticate/verify/', {
        params : details,
      }); 

      
    },
    onError: (err) => {
      console.log(err)
      if(err instanceof AxiosError) {
        console.log(err.response?.data);
        toast(err.response?.data.detail);
      }
      else {
        toast("Some error occured. Please try again");
      }
    },
    onSuccess: (res : any) => {
      console.log(res);
      router.push("/");
      router.refresh();
    },
  });

  useEffect(() => {
    
    const verificationDetails : VerificationDetails = {
      email : searchParams.get('email') as string,
      token : searchParams.get('token') as string,
    }
    verify(verificationDetails);
  }, [])
  

  return (
   isPending && <div className='flex items-center justify-center h-full fl'>
      <div>
        Loading...
      </div>
    </div>
  )
}

export default Verify