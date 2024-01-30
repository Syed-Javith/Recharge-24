"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { CSRBaseUrl } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { EyeIcon, Loader2 } from "lucide-react";

interface ForgotPasswordFormProps { }

const passwordRegex = new RegExp("^(?=.*[a-zA-Z]{6,})[a-zA-Z0-9]*$");
const forgotPasswordSchema = z
  .object({
    email: z.string().email({ message: "Provide valid mail address" }),
    password: z.string().min(6).max(128).regex(passwordRegex, {
      message: "Password should contain minimum 6 Alphabets"
    }),
    confirm_password: z.string().min(6).max(128),
  })
  .refine((data) => data.confirm_password === data.password, {
    message: "Password Mismatch",
    path: ["confirm_password"],
  });

type forgotPasswordPayload = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ }) => {

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "", password: "", confirm_password: "" },
  });

  const router = useRouter();
  const { mutate: forgotPasswordHandel, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
      confirm_password,
    }: forgotPasswordPayload) => {
      const payload: forgotPasswordPayload = {
        email,
        password,
        confirm_password,
      };

      console.log("payload \n", payload);
      const res = await axios.post(
        CSRBaseUrl + "authenticate/forgot_password/",
        payload,
        {
          withCredentials: true,
        }
      );

      return res;
    },
    onError: (err) => {
      console.log("Something went wrong \n", err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.detail ?? 'Invalid Request');
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success('Password Reset Link sent to your Registered mail')
    },
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  return (
    <div>
      <Form {...forgotPasswordForm}>
        <form
          onSubmit={forgotPasswordForm.handleSubmit((e) => {
            forgotPasswordHandel(e);
          })}
        >
          <FormField
            control={forgotPasswordForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="user@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ensure your email is verified</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={forgotPasswordForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter New Password</FormLabel>
                <FormControl>
                  <div className="flex flex-row gap-4">
                    <Input 
                     type={confirmPasswordVisible ? "text" : "password"}
                     placeholder="password" 
                     {...field} 
                    />
                    <Button type="button" onClick={() => setPasswordVisible(!passwordVisible)}> <EyeIcon size={20} /> </Button>
                  </div>
                </FormControl>
                <FormDescription>Password must have a minimum length of 6</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={forgotPasswordForm.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <div className="flex flex-row gap-4">
                    <Input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="confirm your password"
                      {...field}
                    />
                    <Button type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}> <EyeIcon size={20} /> </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit" className="my-4">

            {isPending ?
              <>
                Submiting... <Loader2 className="animate-spin ml-2" />
              </>
              :
              <>
                Submit
              </>
            }
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
