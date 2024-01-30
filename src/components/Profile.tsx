"use client";
import { UserProfileSchema } from "@/types/models";
import { FC, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/Card";
import { CSRBaseUrl } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import {
  AlertCircle,
  Brain,
  CalendarHeart,
  Loader2,
  Phone,
  School,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import EditProfileForm from "@/components/forms/EditProfileForm";
import DialogBox from "./DialogBox";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const [profile, setProfile] = useState<UserProfileSchema>();

  const [error, setError] = useState<boolean>(false);

  const { mutate: profileDetails, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const res = await axios.get(CSRBaseUrl + "authenticate/profile/", {
          withCredentials: true,
        });
        console.log(res);
        return res;
      } catch (err) {
        console.error("Error during login:", err);
        throw err;
      }
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.detail ?? "Invalid Request");
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
      setError(true);
    },
    onSuccess: async (res) => {
      const tempProfile: UserProfileSchema = await res.data;
      setProfile(tempProfile);
    },
  });

  useEffect(() => {
    profileDetails();
  }, []);

  return isPending ? (
    <Loader2 className="animate-spin mx-auto mt-[25%]" size={40} />
  ) : profile == undefined ? (
    <DialogBox />
  ) : error ? (
    <div className="flex items-center justify-center mx-auto mt-[25%]">
      <AlertCircle className="mr-3" size={40} />
      <h2>Error loading profile </h2>
    </div>
  ) : (
    <Card
      className="max-w-xl md:mx-auto md:my-10 rounded-3xl p-5 m-8"
      key={profile.email}
      style={{
        boxShadow:
          "0 0 0.4rem #fff, 0 0 0.4rem #fff, 0 0 4rem rgb(0, 191, 255), 0 0 1rem rgb(0, 191, 255), 0 0 1.6rem rgb(0, 191, 255)",
      }}
    >
      <div className="flex md:flex-row flex-col items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profile.profile_photo ?? ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="mx-3">
          <div className="flex justify-center items-center">
            <CardTitle className="mr-6">
              {profile.first_name + " " + profile.last_name}
            </CardTitle>
            <span className="w-28"></span>
            <EditProfileForm profile={profile} setProfile={setProfile} />
          </div>
          <CardDescription className="flex items-center my-1">
            <Phone size={15} className="mr-2" />
            {profile.mobile_number}
          </CardDescription>
          <div className="flex">
            <CardDescription className="flex items-center mr-4">
              <School size={15} className="mr-2" />
              {profile.college}
            </CardDescription>
            <CardDescription className="flex items-center mr-4">
              <Brain size={15} className="mr-2" />
              {profile.department}
            </CardDescription>
            <CardDescription className="flex items-center mr-4">
              <CalendarHeart size={15} className="mr-2" />
              {profile.year}
            </CardDescription>
          </div>
        </div>
      </div>
      <CardContent>
        <CardDescription className="max-w-[150px] mx-auto my-3">
          <img
            src={profile.qr_code && profile.qr_code}
            alt="Unique user id"
            className="rounded-xl"
          />
        </CardDescription>

        <div className="my-5">
          <div className="font-bold underline">Registered Proshows</div>
          {profile.proshow_registrations.length > 0 ? (
            profile.proshow_registrations.map((proshow_registration) => (
              <li key={proshow_registration.proshow.id}>
                {proshow_registration.proshow.name}
              </li>
            ))
          ) : (
            <h3>-</h3>
          )}
        </div>
      </CardContent>
      <CardContent>
        <div className="my-5">
          <div className="font-bold underline">Registered Proshows</div>
          {profile.event_registrations.length > 0 ? (
            profile.event_registrations.map((event_registration) => (
              <li key={event_registration.id}>{event_registration.name}</li>
            ))
          ) : (
            <h3>-</h3>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
