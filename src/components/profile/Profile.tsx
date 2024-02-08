"use client";
import { UserProfileSchema } from "@/types/models";
import { FC, useEffect, useState } from "react";
import { CSRBaseUrl } from "@/lib/utils";
import Style from "./profile.module.css"
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import {
  AlertCircle,
} from "lucide-react";
import DialogBox from "../DialogBox";
import DesktopProfile from "./DesktopProfile";
import Loader from "../loader/Loader";
import ProshowTicket from "./ProshowTicket";
import EventTicket from "./EventTicket";
import localFont from 'next/font/local'

const SketchFont = localFont({ src: '../../../public/fonts/Jura.ttf' });

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
    <Loader/>
  ) : profile == undefined ? (
    <DialogBox />
  ) : error ? (
    <div className="flex items-center justify-center mx-auto mt-[25%]">
      <AlertCircle className="mr-3" size={40} />
      <h2>Error loading profile </h2>
    </div>
  ) : (
    <div className={`${Style.profileContainer}`}>
      <DesktopProfile profile={profile} setProfile={setProfile}/>
      <h1 className={`${Style.profileSectionTitle} ${SketchFont.className}`}>Registered Proshows</h1>
      {
        profile.proshow_registrations.map(({proshow}, index) => {
          return (
            <ProshowTicket 
            key={index}
            imgURL={proshow.image} 
            day={proshow.day} 
            show_name={proshow.name} 
            guest_name={proshow.day == 1 ? "Celeb 1" : (proshow.day == 2 ? "celeb 2" : "Celeb 3")} 
            time={"6:00 PM"} 
            />
            );
          })
        }
        <div className={`${Style.glowingLine}`}></div>
      <h1 className={`${Style.profileSectionTitle} ${SketchFont.className}`}>Registered Events</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 m-auto justify-center">
        {
          profile.event_registrations.map((event, index) =>{
            return(
              <EventTicket eventDetail={event} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Profile;
