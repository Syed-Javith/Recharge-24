"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { EyeIcon, EyeOff, EyeOffIcon, Loader2, MailCheck } from "lucide-react";
import {
  Form,
  FormControl,
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
import axios, { AxiosError } from "axios";
import { CSRBaseUrl } from "@/lib/utils";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import "./styles.css"
import RandomBox from "./RandomBox";
interface RegisterFormProps { }

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
    college: z.string().min(1),
    year: z.number().min(1),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password mismatch.",
    path: ["confirm_password"],
  });

const RegisterForm: FC<RegisterFormProps> = ({ }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [mailSent, setMailSent] = useState(false)

  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      mobile_number: "",
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

      if (err) {
        toast.error(err?.response?.data?.detail ?? "Email already exists");
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res: any) => {
      setMailSent(true)
    },
  });

  return (

    (mailSent) ?
      <div className="flex flex-col justify-center items-center">
        <MailCheck size={40} />
        <h3> Verification mail has been sent to your registered mail.</h3>
      </div>
      :
      <div className="flex flex-col justify-center items-center wrapping">
      <div className="cont">
        <div className="lighter lighter-1"></div>
        <div className="lighter lighter-2"></div>
        <div className="lighter lighter-3"></div>
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit((e) => {
              registerUser(e);
            })}
          >
          
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg: Arun" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg: Kumar" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="eg: user@example.com"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>Ensure your email is verified</FormDescription> */}
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Mobile Number</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg: 9876543210" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">College/School Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg: Rajalakshmi Engineering College" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Year of Study</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value, 10))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a year/standard" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"1"}>I st year</SelectItem>
                        <SelectItem value={"2"}>II nd year</SelectItem>
                        <SelectItem value={"3"}>III rd year</SelectItem>
                        <SelectItem value={"4"}>IV th year</SelectItem>
                        <SelectItem value={"5"}>V th year</SelectItem>
                        <SelectItem value={"11"}> 11<sup>th</sup> std</SelectItem>
                        <SelectItem value={"12"}> 12<sup>th</sup> std</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <FormDescription>Enter your academic year</FormDescription> */}
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Create your own Password</FormLabel>
                    <FormControl>
                      <div className="flex flex-row gap-4">
                        <Input type={passwordVisible ? "text" : "password"} placeholder="Password Min. 6 alphabets" {...field} />
                        <Button className="eye-btn" type="button" onClick={() => setPasswordVisible(!passwordVisible)}> 
                        {
                          passwordVisible ? <EyeIcon size={20} /> : <EyeOff size={20} />
                        } 
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="my-3">
              <FormField
                control={registerForm.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="flex flex-row gap-4">
                        <Input
                          type={confirmPasswordVisible ? "text" : "password"}
                          placeholder="Re-enter password"
                          {...field}
                        />
                        <Button className="eye-btn" type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}> 
                        {
                          confirmPasswordVisible ? <EyeIcon size={20} /> : <EyeOff size={20} />
                        } 
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Button disabled={isPending} type="submit" className='w-3/5 mt-7 mb-3 submit-btn'>
                Register{isPending && <Loader2 className="animate-spin ml-2" />}
              </Button>
              <Link 
              href={'/resend-verification-email'} 
              className="mx-auto text-gray-50 text-[0.85rem] mt-2 hover:text-white text-center">Didn&apos;t Receive verification mail?<br/> Resend again
              </Link>
            </div>
          </form>
        </Form>
        <RandomBox />
      </div>
    </div>
  );
};

export default RegisterForm;
