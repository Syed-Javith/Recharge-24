"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Loader2 } from "lucide-react";
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
import { NextResponse } from "next/server";

interface LoginFormProps {}

type loginFormPayload = z.infer<typeof loginFormSchema>;

const loginFormSchema = z.object({
  email: z.string().email({ message: "Your email is not of correct format." }),
  password: z
    .string()
    .min(6, { message: "Your password must contain 6 characters" }),
});

const LoginForm: FC<LoginFormProps> = ({}) => {
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
        toast(err.response?.data.detail);
      } else {
        toast("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res) => {
      console.log(res);
      router.push("/");
      router.refresh();
    },
  });
  return (
    <div>
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit((e) => {
            loginUser(e);
          })}
        >
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
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>Check the caps lock</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">
            Login{isPending && <Loader2 className="animate-spin ml-2" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
