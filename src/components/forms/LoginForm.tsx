"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { EyeIcon, Loader2 } from "lucide-react";
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
      router.push("/");
      router.refresh();
    },
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <Form {...loginForm} >
        <form
          onSubmit={loginForm.handleSubmit((e) => {
            loginUser(e);
          })}
          className="flex flex-col"
        >
          <div className="my-3">
            <FormField
              control={loginForm.control}
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
          </div>
          <div className="my-3">
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex flex-row gap-4">
                      <Input
                        type={passwordVisible ? "text" : "password"} 
                        placeholder="password"
                        {...field}
                      />
                      <Button type="button" onClick={() => setPasswordVisible(!passwordVisible)}> <EyeIcon size={20} /> </Button>
                    </div>
                  </FormControl>
                  <FormDescription>Check the caps lock</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isPending} type="submit" className="mx-auto mt-4 mb-2 w-3/6">
            Login{isPending && <Loader2 className="animate-spin ml-2" />}
          </Button>
        </form>
      </Form>
      <Link href={'/forgot-password'} className="mx-auto text-gray-400 underline">Forgot Password</Link>
    </div>
  );
};

export default LoginForm;
