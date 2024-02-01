"use client"
import { CSRBaseUrl } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/Form';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { Input } from '../ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import "./styles.css"
import RandomBox from './RandomBox';
interface pageProps { }

const resendPasswordFormSchema = z.object({
  email: z.string().email({ message: "Your email is not of correct format." }).min(1).max(128)
})

type resendPasswordFormPayload = z.infer<typeof resendPasswordFormSchema>;

const ResendVerificationForm: FC<pageProps> = ({ }) => {

  const resendPasswordForm = useForm<z.infer<typeof resendPasswordFormSchema>>({
    resolver: zodResolver(resendPasswordFormSchema),
    defaultValues: {
      email: ""
    }
  });

  const { mutate: resendVerification, isPending } = useMutation({
    mutationFn: async ({ email }: resendPasswordFormPayload) => {
      await axios.get(
        CSRBaseUrl + "/authenticate/resend_token/",
        {
          params: { email }
        }
      )
    },
    onError: (err) => {
      console.log("error ", err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.detail)
      } else {
        toast.error("Something went wrong please try again later.")
      }

    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Verification Email sent")
    }
  })

  return <div className="flex flex-col justify-center items-center wrapping">
    <div className="cont">
    <Form {...resendPasswordForm}>
      <form
        onSubmit={resendPasswordForm.handleSubmit((e) => {
          resendVerification(e);
        })}
        className="flex flex-col"
      >
        <div className="my-3">
        <FormField
          control={resendPasswordForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Enter your Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your Registered mail ID"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {
                  isPending ?
                    <>
                      Wait we are sending you <br /> Verification Email again
                    </> : <></>
                }
              </FormDescription>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        </div>
        <Button type='submit' disabled={isPending} className='mx-auto mt-4 mb-2 w-6/12 submit-btn'>
          Resend Mail {
            isPending && <Loader2 className="animate-spin ml-2" />
          }
        </Button>

      </form>
    </Form>
    <RandomBox />
    </div>
  </div>
}

export default ResendVerificationForm