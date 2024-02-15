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
import RandomBox from './RandomBox';
import FormStyle from "./auth.module.css"
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
      // console.log("error ", err);
      if (err instanceof AxiosError) {
        // console.log(err)
        toast.error(err.response?.data.detail)
      } else {
        toast.error("Something went wrong please try again later.")
      }

    },
    onSuccess: (data) => {
      // console.log(data);
      toast.success("Verification Email sent")
    }
  })

  return <div className={`flex flex-col justify-center items-center ${FormStyle.wrapping}`}>
    <div className={FormStyle.cont}>
      <div className={`${FormStyle.lighter} ${FormStyle.lighter1}`}></div>
      <div className={`${FormStyle.lighter} ${FormStyle.lighter2}`}></div>
      <div className={`${FormStyle.lighter} ${FormStyle.lighter3}`}></div>
      <Form {...resendPasswordForm}>
        <form
          onSubmit={resendPasswordForm.handleSubmit((e) => {
            resendVerification(e);
          })}
          className={`flex flex-col ${FormStyle.formt}`}
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
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit' disabled={isPending} className={`mx-auto mt-4 mb-2 ${FormStyle.submit_btn}`}>
            Resend Verification Mail {
              isPending && <Loader2 className="animate-spin ml-2" />
            }
          </Button>
          <p className="mx-auto text-gray-50 text-[0.85rem] mt-2 hover:text-white w-[70%]">
              Please check your email inbox for the verification link
            </p>
        </form>
      </Form>
      <RandomBox />
    </div>
  </div>
}

export default ResendVerificationForm