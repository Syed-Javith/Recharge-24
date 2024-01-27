// import { FC } from 'react'

// interface pageProps {
  
// }

// const page: FC<pageProps> = ({}) => {
//   return <div>registration page</div>
// }

// export default page

"use client";
// "use client" and other imports...

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { CSRBaseUrl } from "@/lib/utils";
import { toast } from "sonner";
import { NextResponse } from "next/server";

interface LoginFormProps {}

type loginFormPayload = z.infer<typeof loginFormSchema>;

const loginFormSchema = z.object({
  email: z.string().email({ message: "Your email is not of correct format." }).min(1).max(254),
  password: z.string().min(1).max(128),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  mobile_number: z.string().min(1),
  department: z.string().min(1).max(255),
  college: z.string().min(1),
  year: z.number().min(1),
});

const LoginForm: FC<LoginFormProps> = ({}) => {
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      mobile_number: "",
      department: "",
      college: "",
      year: 1,
    },
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async (data: loginFormPayload) => {
      const payload: loginFormPayload = { ...data };
      console.log("This is payload\n", payload);

      try {
        const res = await axios.post(
          CSRBaseUrl + "authenticate/register/",
          payload,
          { withCredentials: true }
        );
        console.log(res);
        return res;
      } catch (err) {
        console.error("Error during login:", err);
        throw err;
      }
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
                  <Input type="email" placeholder="user@example.com" {...field} />
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
          <FormField
            control={loginForm.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Mobile Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Department" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="College" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter year" {...field}  />
                </FormControl>
                <FormDescription>Enter your academic year</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">
            Register{isPending && <Loader2 className="animate-spin ml-2" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
