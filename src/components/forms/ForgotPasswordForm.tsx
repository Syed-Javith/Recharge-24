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
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import "./styles.css"
import RandomBox from "./RandomBox";
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
    <div className="flex flex-col justify-center items-center wrapping">
      <div className="cont">
        <div className="lighter lighter-1"></div>
        <div className="lighter lighter-2"></div>
        <div className="lighter lighter-3"></div>
      <Form {...forgotPasswordForm}>
        <form
          onSubmit={forgotPasswordForm.handleSubmit((e) => {
            forgotPasswordHandel(e);
          })}
          className="flex flex-col"
        >
          <div className="my-3">
          <FormField
            control={forgotPasswordForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Enter your Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    // placeholder="user@example.com"
                    placeholder="Enter your registered email address"
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
            control={forgotPasswordForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Enter New Password</FormLabel>
                <FormControl>
                  <div className="flex flex-row gap-4">
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      // placeholder="password"
                      placeholder="min. 6 alphabets"
                      autoComplete="off"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="eye-btn"
                      onClick={() => setPasswordVisible(!passwordVisible)}>
                      {
                        passwordVisible ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />
                      }
                    </Button>
                  </div>
                </FormControl>
                {/* <FormDescription>Password must have a minimum length of 6</FormDescription> */}
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
          </div>
          <div className="my-3">
          <FormField
            control={forgotPasswordForm.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Confirm New Password</FormLabel>
                <FormControl>
                  <div className="flex flex-row gap-4">
                    <Input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm your password"
                      autoComplete="off"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="eye-btn"
                      onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                      {
                        confirmPasswordVisible ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />
                      }
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-red-500"/>
              </FormItem>
            )}
          />
          </div>
          <Button disabled={isPending} type="submit"  className="mx-auto mt-4 mb-2 w-6/12 submit-btn">

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
      <RandomBox />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
