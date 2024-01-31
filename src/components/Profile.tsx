"use client";
import { UserProfileSchema } from "@/types/models";
import { FC, useEffect, useState } from "react";
import "./profile.css";
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
  PenIcon,
  Mail,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import EditProfileForm from "@/components/forms/EditProfileForm";
import DialogBox from "./DialogBox";
import KnowMore from "./KnowMore";
import Link from "next/link";
import { Button } from "./ui/Button";
import DesktopProfile from "./DesktopProfile";

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
    <div className="profile-container">
      <DesktopProfile profile={profile}/>
      <div className="profile-card">
        {profile.profile_photo ? (
          <img className="rounded-full" src={profile.profile_photo} alt="" />
        ) : (
          <div className="profile-avatar">
            {profile.first_name[0] + profile.last_name[0]}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-[#d7d70c]">{profile.first_name + " " + profile.last_name}</h2>
          <div className="flex">
            <Mail className="inline-block pr-2" />
            <p className="">{" " + profile.email}</p>
          </div>
          <div className="flex">
            <Phone className="inline-block pr-2" />
            <p className="">{" " + profile.mobile_number}</p>
          </div>
        </div>
        <div className="edit-profile">
          <EditProfileForm profile={profile} setProfile={setProfile} />
        </div>
      </div>
      <div className="proshow-event">
        {profile.event_registrations.length > 0 && (
          <div className="pr-proshow-container">
            <h2 className="m-4">Registered Proshows</h2>
            {profile.event_registrations.map((proshow, index) => (
              <div
                className={`profile-proshow ${
                  index % 2 == 0 ? "prp-even" : "prp-odd"
                }`}
                key={proshow.id}
              >
                <img src={proshow.image} alt="" />
                <div className="pr-proshow-content">
                  <div className="flex gap-4 items-center mb-2">
                    <h2 className="pr-event-title">{proshow.name}</h2>
                    <Link href="proshow">
                      <KnowMore />
                    </Link>
                  </div>
                  <p>{proshow.description?.slice(0, 240) + " ..."}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {profile.event_registrations.length > 0 && (
          <div className="pr-event-container">
            <h2 className="m-4">Registered Events</h2>
            {profile.event_registrations.map((event, index) => (
              <div
                className={`profile-event ${
                  index % 2 == 0 ? "pre-even" : "pre-odd"
                }`}
                key={event.id}
              >
                <img src={event.image} alt="" />
                <div className="pr-event-content">
                  <div className="flex gap-4 items-center mb-2">
                    <h2 className="pr-event-title">{event.name}</h2>
                    <Link
                      href={`${"event/" + event.category.id + "/" + event.id}`}
                    >
                      <KnowMore />
                    </Link>
                  </div>
                  <p>{event.description?.slice(0, 240) + " ..."}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
