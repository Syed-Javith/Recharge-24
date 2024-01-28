'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Button } from "../ui/Button"
import { Dispatch, SetStateAction, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { CSRBaseUrl } from "@/lib/utils"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { UserProfileSchema } from "@/types/models"
import { Edit, Loader2 } from "lucide-react"
import { profile } from "console"

const phoneNumberRegex = new RegExp("^([0-9]{10,})$");


const editProfileSchema = z
  .object({
    first_name: z.string().min(1),
    last_name: z.string().optional(),
    mobile_number: z.string().length(10).regex(phoneNumberRegex, {
      message: "Phone number must contain only numerals",
    }),
    year: z.number().min(1),
})

type editProfilePayload = z.infer<typeof editProfileSchema>;

interface EditProfileProps{
    profile:UserProfileSchema
    setProfile:  Dispatch<SetStateAction<UserProfileSchema | undefined>>
}


const EditProfileForm = ( {profile, setProfile} : EditProfileProps) => {    

    const editForm = useForm<z.infer<typeof editProfileSchema>>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
          first_name: profile.first_name,
          last_name: profile.last_name,
          mobile_number: profile.mobile_number ?? undefined,
          year: profile.year ?? undefined,
        },
    });

    const { mutate: editProfile, isPending } = useMutation({
        mutationFn: async (data: editProfilePayload) => {
            const payload: editProfilePayload = { ...data };
           
            console.log("This is payload\n", payload);
            try {
                const res = await axios.put(
                    CSRBaseUrl + "authenticate/profile/",
                    payload,
                    { withCredentials: true }
                );
                setOpen(false);
                setProfile({
                    ...profile, 
                    first_name: data.first_name,
                    last_name: data.last_name,
                    mobile_number: data.mobile_number,
                    year: data.year,
                });
                return res;
            } catch (err) {
                console.error("Error during login:", err);
                throw err;
            }
        },
        onError: (err: any) => {
            if (err) {
                toast.error(err?.response?.data?.detail ?? "Invalid Request");
            } else {
                toast.error("Some error occurred. Please try again later.");
            }
        },
        onSuccess: (res: any) => {
            toast.success("Profile updated successfully");
        },
    });

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger>
                <div className="flex items-center">
                    <span className="text-blue-500 mr-2">Edit Profile</span>
                    <Edit className="cursor-pointer text-blue-500" size={15}/>
                </div>
              
            </DialogTrigger>

            <DialogContent className="w-[96%]">

                <DialogHeader className="text-left">
                    <DialogTitle>Edit your profile details</DialogTitle>
                </DialogHeader>

                <Form {...editForm}>

                    <form onSubmit={editForm.handleSubmit((e) => { editProfile(e); })} >

                        <FormField
                            control={editForm.control}
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
                            control={editForm.control}
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
                            control={editForm.control}
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
                            control={editForm.control}
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
                                            <SelectItem value={"5"}>V</SelectItem>
                                            <SelectItem value={"11"}> 11<sup>th</sup> </SelectItem>
                                            <SelectItem value={"12"}> 12<sup>th</sup> </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                    <Button disabled={isPending} type="submit" className="w-full mt-10">
                        Update{isPending && <Loader2 className="animate-spin ml-2" />}
                    </Button>
                      
                    </form>

                </Form>

            </DialogContent>
        </Dialog> 
    )
}

export default EditProfileForm