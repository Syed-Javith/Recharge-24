"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { CSRBaseUrl } from "@/lib/utils";
import { toast } from "sonner";
import Link from "next/link";
import FormStyle from "./auth.module.css"
import RandomBox from "./RandomBox";
interface LoginFormProps { }

type loginFormPayload = z.infer<typeof loginFormSchema>;

const loginFormSchema = z.object({
  email: z.string().email({ message: "Your email is not of correct format." }),
  password: z
    .string()
    .min(6, { message: "Your password must contain 6 characters" }),
});

const LoginForm: FC<LoginFormProps> = ({ }) => {
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async ({ email, password }: loginFormPayload) => {
      const payload: loginFormPayload = {
        email,
        password,
      };
      console.log("This is payload\n", payload);

      const res = await axios.post(
        CSRBaseUrl + "authenticate/login/",
        payload,
        { withCredentials: true }
      );
      return res;
    },
    onError: (err) => {
      console.log("This is the error", err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.detail ?? 'Invalid Request');
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res) => {
      console.log(res);
      router.back();
      router.refresh();
    },
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <div className={`flex flex-col justify-center items-center ${FormStyle.wrapping}`}>
      <div className={FormStyle.cont}>
        <div className={`${FormStyle.lighter} ${FormStyle.lighter1}`}></div>
        <div className={`${FormStyle.lighter} ${FormStyle.lighter2}`}></div>
        <div className={`${FormStyle.lighter} ${FormStyle.lighter3}`}></div>
        <Form {...loginForm} >
          <form
            onSubmit={loginForm.handleSubmit((e) => {
              loginUser(e);
            })}
            className={`flex flex-col ${FormStyle.formt}`}
          >
            <div className="my-3">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Enter your Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="user@example.com"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription className="input-desc">Ensure your email is verified</FormDescription> */}
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Enter your Password</FormLabel>
                    <FormControl>
                      <div className="flex flex-row gap-4">
                        <Input
                          type={passwordVisible ? "text" : "password"}
                          placeholder="password"
                          autoComplete="off"
                          {...field}
                        />
                        <Button
                          className={FormStyle.eye_btn}
                          type="button"
                          tabIndex={-1}
                          onClick={() => setPasswordVisible(!passwordVisible)}>
                          {
                            passwordVisible ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />
                          }
                        </Button>
                      </div>
                    </FormControl>
                    {/* <FormDescription className="input-desc">Check the caps lock</FormDescription> */}
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isPending} type="submit" className={`mx-auto mt-4 mb-2 w-6/12  ${FormStyle.submit_btn}` }>
              Login{isPending && <Loader2 className="animate-spin ml-2" />}
            </Button>
            <Link href={'/forgot-password'} className="mx-auto text-gray-50 mb-2 text-[0.85rem] mt-2 hover:text-white">Forgot Password ? Reset</Link>
            <Link href={'/register'} className="mx-auto text-gray-50 text-[0.85rem] mt-2 hover:text-white">New User ? Register</Link>
            <Link href={'/resend-verification-email'} className="text-center mx-auto text-gray-50 text-[0.85rem] mt-2 hover:text-white">Didn&apos;t Receive Email ? Resend verification</Link>
          </form>
        </Form>
        <RandomBox />
      </div>
    </div>
  );
};

export default LoginForm;
