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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { CSRBaseUrl } from "@/lib/utils";
import { toast } from "sonner";
import { NextResponse } from "next/server";
import Link from "next/link";

interface RegisterFormProps {}

type registerFormPayload = z.infer<typeof registerFormSchema>;

const passwordRegex = new RegExp("^(?=.*[a-zA-Z]{6,})[a-zA-Z0-9]*$");
const phoneNumberRegex = new RegExp("^([0-9]{10,})$");

const registerFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Your email is not of correct format." })
      .min(1)
      .max(254),
    password: z.string().min(6).max(128).regex(passwordRegex, {
      message: "The Password must contain minimum 6 Alphabets",
    }),
    confirm_password: z.string().min(1).max(128),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    mobile_number: z.string().length(10).regex(phoneNumberRegex, {
      message: "Phone number must contain only numerals",
    }),
    department: z.string().min(1).max(255),
    college: z.string().min(1),
    year: z.number().min(1),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password mismatch.",
    path: ["confirm_password"],
  });

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const router = useRouter();
  const [passwordVisible , setPasswordVisible] = useState(false)

  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      mobile_number: "",
      department: "",
      college: "",
      year: 1,
    },
  });

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async (data: registerFormPayload) => {
      const payload: registerFormPayload = { ...data };
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
    onError: (err: any) => {
      console.log("This is the error", err);
      if (err) {
        toast(err?.response?.data?.detail);
      } else {
        toast("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res: any) => {
      console.log(res);
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit((e) => {
            registerUser(e);
          })}
        >
          <FormField
            control={registerForm.control}
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
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                 <div className="flex flex-row gap-4">
                 <Input type={ passwordVisible ? "text" : "password" } placeholder="password" {...field} />
                  <Button type="button" onClick={()=> setPasswordVisible(!passwordVisible)}> <EyeIcon size={20}/> </Button>
                 </div>
                </FormControl>   
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
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
            control={registerForm.control}
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
            control={registerForm.control}
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
            control={registerForm.control}
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
            control={registerForm.control}
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
            control={registerForm.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value, 10))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={"1"}>I</SelectItem>
                    <SelectItem value={"2"}>II</SelectItem>
                    <SelectItem value={"3"}>III</SelectItem>
                    <SelectItem value={"4"}>IV</SelectItem>
                    <SelectItem value={"11"}>
                      11<sup>th</sup>
                    </SelectItem>
                    <SelectItem value={"12"}>
                      12<sup>th</sup>
                    </SelectItem>
                  </SelectContent>
                </Select>
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
      <Link href={'/resend-verification-email'} >Didn't Receive mail? resend again</Link>
    </div>
  );
};

export default RegisterForm;
