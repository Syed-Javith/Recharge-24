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
import MerchandiseTicket from "./MerchandiseTicket";
import Loader from "../loader/Loader";
import ProshowTicket from "./ProshowTicket";
import EventTicket from "./EventTicket";
import localFont from 'next/font/local'
import Neon from "../Text/Neon";
import Link from "next/link";
import { Button } from "../ui/Button";

const SketchFont = localFont({ src: '../../../public/fonts/Jura.ttf' });

interface ProfileProps { }

const Profile: FC<ProfileProps> = ({ }) => {
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
      // console.log(await res.data)
      const tempProfile: UserProfileSchema = await res.data;
      setProfile(tempProfile);
    },
  });

  useEffect(() => {
    profileDetails();
  }, []);


  return isPending ? (
    <Loader />
  ) : profile == undefined ? (
    <DialogBox />
  ) : error ? (
    <div className="flex items-center justify-center mx-auto mt-[25%]">
      <AlertCircle className="mr-3" size={40} />
      <h2>Error loading profile </h2>
    </div>
  ) : (
    <div className={`${Style.profileContainer}`}>
      <DesktopProfile profile={profile} setProfile={setProfile} />
      <div className="text-center m-auto">
        <Neon text={(profile.proshow_registrations.length == 0) ? "No Proshows Registered" : "Registered Proshows"} />
      </div>
      {
        profile.proshow_registrations.length == 0 &&
        <Link href={'/proshow'} className="m-auto mt-6" >
          <Button>
            Register Proshows now
          </Button>
        </Link>
      }
      {
        profile.proshow_registrations.map(({ proshow }, index) => {
          return (
            <ProshowTicket
              key={index}
              imgURL={proshow.image}
              day={proshow.day}
              show_name={proshow.name}
              guest_name={proshow.day == 1 ? "Celeb 1" : (proshow.day == 2 ? "celeb 2" : "Celeb 3")}
              premium={proshow.premium}
            />
          );
        })
      }
      <div className={`${Style.glowingLine}`}></div>
      <div className="text-center m-auto">
        <Neon text={(profile.event_registrations.length == 0) ? "No Events Registered" : "Registered Events"} />
      </div>
      {
        profile.event_registrations.filter((e) => !e.name.match(/Merchandise/i)).length == 0 &&
        <Link href={'/event'} className="m-auto mt-6">
          <Button>
            Register events now
          </Button>
        </Link>
      }
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 m-auto mt-8 justify-center">
        {
          profile.event_registrations.filter((e) => !e.name.match(/Merchandise/i)).map((event, index) => {
            return (
              <Link key={index} href={`/event/${event.category}/${event.id}`}>
                <EventTicket eventDetail={event} />
              </Link>
            )
          })
        }
      </div>
      <div className={`${Style.glowingLine}`}></div>

      <div className="text-center m-auto">
        <Neon text={(profile.event_registrations.filter((e) =>  e.name.match(/Merchandise/i)  ).length == 0) ? "No Merchandise bought" : "Merchandise T-Shirts"} />
      </div>
      {
        profile.event_registrations.filter((e) =>  e.name.match(/Merchandise/i)  ).length == 0 &&
        <Link href={'/merchandise'} className="m-auto mt-6">
          <Button>
            Buy Merchandise now
          </Button>
        </Link>
      }
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 m-auto mt-8 ml-4 mr-4 justify-center">
        {
          profile.event_registrations.filter((e) =>  e.name.match(/Merchandise/i) ).map((event, index) => {
            return (
              <>
              <MerchandiseTicket merchandiseDetail={event} key={index} />
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default Profile;
