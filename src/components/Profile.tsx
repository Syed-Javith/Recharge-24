'use client'
import { UserProfileSchema } from "@/types/models";
import { FC, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/Card";
import { CSRBaseUrl } from "@/lib/utils";
import EditProfileForm from "./forms/editProfileForm";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { AlertCircle, Loader2 } from "lucide-react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {

  const [profile, setProfile]=useState<UserProfileSchema>();
  const [error, setError] = useState<boolean>(false);
  const {mutate: profileDetails, isPending} =useMutation({
    mutationFn: async () => {

      try {

        const res = await axios.get(CSRBaseUrl + "authenticate/profile/", {withCredentials: true});
        return res;
      } catch(err) {
        console.error("Error during login:", err);
        throw err;
      }
    },
    onError: (err) => {

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.detail ?? 'Invalid Request');
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
      setError(true);

    },
    onSuccess: async (res) => {
      const tempProfile: UserProfileSchema = await res.data;
      setProfile(tempProfile);
    }
  })

  useEffect(() => {
    profileDetails()
  }, [])
  
  
  return (

    (isPending) ? 
        <Loader2 className="animate-spin mx-auto mt-[25%]" size={40} />

    : (profile==undefined) ?
        <></>

    : (error) ? 
      <div className="flex items-center justify-center mx-auto mt-[25%]">
        <AlertCircle className="mr-3" size={40} />
        <h2>Error loading profile </h2>
      </div>

    :
      <Card className="max-w-xl" key={profile.email}>
        <CardTitle>{profile.first_name + " " + profile.last_name}</CardTitle>
        <CardDescription>{profile.mobile_number}</CardDescription>
        <CardContent>

          <div>

            <EditProfileForm profile={profile} setProfile={setProfile}/>

            <div className="font-bold">Registered Proshows</div>
            {profile.proshow_registrations.length > 0 ? (
              profile.proshow_registrations.map((proshow_registration) => (
                <p key={proshow_registration.proshow.id}>
                  {JSON.stringify(proshow_registration.proshow.name)}
                </p>
              ))
            ) : (
              <h3>-</h3>
            )}

          </div>
        </CardContent>
        <CardContent>
          <div>
            <div className="font-bold">Registered Proshows</div>
            {profile.event_registrations.length > 0 ? (
              profile.event_registrations.map((event_registration) => (
                <p key={event_registration.id}>
                  {JSON.stringify(event_registration.name)}
                </p>
              ))
            ) : (
              <h3>-</h3>
            )}
          </div>
        </CardContent>
        <CardDescription className="max-w-[150px]">
          <img src={profile.qr_code && profile.qr_code} alt="Unique user id" />
        </CardDescription>
      </Card>
  );
};

export default Profile;
