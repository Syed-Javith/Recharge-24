"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getCookie, setCookie } from "cookies-next";

interface LoginFormProps {}

type loginFormPayload = z.infer<typeof loginFormSchema>;

const loginFormSchema = z.object({
  email: z.string().email({ message: "Your email is not of correct format." }),
  password: z
    .string()
    .min(6, { message: "Your password must contain 6 characters" }),
});

const LoginForm: FC<LoginFormProps> = ({}) => {
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async ({ email, password }: loginFormPayload) => {
      const payload: loginFormPayload = {
        email,
        password,
      };

      console.log("This is payload\n", payload);
      const { data } = await axios.post(
        "http://154.49.243.165:4003/authenticate/login/",
        payload
      );
      // const { data } = await axios.get(
      //   "http://154.49.243.165:4003/authenticate/profile/"
      // );
      // const {data} = await axios.get('http://154.49.243.165:4003/event');
      console.log(data);
      // console.log(profiledata);
    },
    onError: (err) => {
      console.log("This is the error: \n", err);
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
                  <Input placeholder="user@example.com" {...field} />
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
                  <Input placeholder="password" {...field} />
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
