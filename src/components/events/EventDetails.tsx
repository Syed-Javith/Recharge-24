"use client";
import { EventDetailSchema } from "@/types/models";
import { FC, useState } from "react";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserJwtPayload } from "@/lib/auth";
import styles from './event.module.css'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/Button";
import { CSRBaseUrl } from "@/lib/utils";
import MembersDialog from "./MembersDialog";
import LoginDialog from "./LoginDialog";
import JoinTeam from "./JoinTeam";
import { Building, CalendarCheckIcon, Clock, Copy, Hourglass, Mail, MapPinIcon, Users } from "lucide-react";
import { toast } from "sonner";
import CreateTeamDialog from "./CreateTeamDialog";
import localFont from 'next/font/local'


const ChakraFont = localFont({ src: '../../../public/fonts/chakra.ttf' })
const JuraFont = localFont({ src: '../../../public/fonts/Jura.ttf' })

interface EventDetailsProps {
  event: EventDetailSchema;
  session: UserJwtPayload | null;
}

const EventDetails: FC<EventDetailsProps> = ({
  event,
  session,
}: EventDetailsProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const register = () => {
    setLoading(true);
    axios
      .post(
        CSRBaseUrl + "event/event-register/",
        { event_id: event?.id },
        { withCredentials: true }
      )
      .then((res) => {
        if (event.pay != 0) {
          window.location.href = res.data?.payment_link;
        } else {
          router.refresh();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const registerTeam = () => {
    setLoading(true);
    axios
      .post(
        CSRBaseUrl + "event/event-register/",
        { event_id: event?.id },
        { withCredentials: true }
      )
      .then((res) => {
        if (event.pay != 0) {
          window.location.href = res.data?.payment_link;
        } else {
          router.refresh();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const deleteMember = (deleteId: number) => {
    axios
      .delete(CSRBaseUrl + "event/team/", {
        withCredentials: true,
        data: {
          event_registration_id: event?.event_registration[0].id,
          member_id: deleteId,
        },
      })
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (event) {
    return (
      <div className={styles.event_details_bg}><div className="max-w-[1300px] m-auto md:p-4 p-2 pt-10">
      <div className="grid grid-cols-12 gap-6 justify-between md:p-6 p-4 mt-16 border-b-2 border-white">
        <div className="flex gap-6 md:col-span-6 lg:col-span-8 col-span-12">
          <img
            src={event.image}
            alt="Event Image"
            width={250}
            height={250}
            className="max-w-[340px] flex-1 lg:block hidden object-cover border-[1.5px] rounded-xl  max-h-[290px] min-h-[260px]"
          />
          <div>
            <h1 className={`text-[2.5rem] mb-3 ${JuraFont.className} ${styles.event_head}`}>{event.name.toUpperCase()}</h1>
            <div className="flex space-x-3 mb-4">
              {event.team_event ? (
                <Badge variant="default" className="team mt-2 ">
                  Team Event
                </Badge>
              ) : (
                <Badge variant="default" className="team mt-2 ">
                  Individual Event
                </Badge>
              )}
              {event.is_registered && event.team_event && (
                <Badge variant="default" className="team mt-2 ">
                  Registered
                </Badge>
              )}
            </div>

            <div className={`font-medium text-lg`}>
            {event.pay == 0 ? (
                "- Free Event"
                ) : (
                  `- Registration Fee: Rs. ${event.pay}`
                  )
                }
            </div>

            {event.prize && (
              <div className="font-medium text-lg py-1">
                - Prize Pool:  
                <span className={`ml-1 font-regular ${ChakraFont.className}`} >
                  Rs. {event.prize}
                </span>
              </div>
            )}

            {event.registration_end_date && <div className={`text-2xl mt-2 text-[rgb(237,215,90)] ${styles.end_date}`}>
              <span>Registration End Date:{" "}
              {event.registration_end_date.split("-").reverse().join("-")}</span>
            </div>}

            {event.is_registered && !event.team_event && (
              <Button
                variant="outline"
                className="border-2 border-green-300 text-md bg-black mt-6 mr-4 text-center text-green-300"
                disabled={true}
              >
                <span className="cursor-pointer">Registered</span>
              </Button>
            )}

            {event.is_registered &&
            event.team_event &&
            event.event_registration[0]?.team[0]?.members.length > 0 &&
            session ? (
              <MembersDialog
                event={event}
                user={session.id}
                deleteMember={deleteMember}
              />
            ) : (
              <></>
            )}

            {event.is_registered ? (
              event.team_event ? (
                event.event_registration[0].user.email == session?.id ? (
                  <div className="inline-block p-2 mt-4 border-2 border-white outline-none bg-black rounded-lg">
                    Team Code:
                    <input
                      type="text"
                      value={event.event_registration[0].team_code}
                      id="team-code"
                      className="w-[120px] outline-none px-1 bg-black"
                      readOnly
                    />
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          (
                            document.getElementById(
                              "team-code"
                            ) as HTMLInputElement
                          ).value
                        );
                      }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Copy
                              className="w-6 h-4 inline-block"
                              onClick={() => {
                                toast.success(
                                  "Team Code Copied Successfully"
                                );
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy to Clipboard</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </div>
                ) : (
                  <> </>
                )
              ) : (
                <> </>
              )
            ) : event.registration_count <= event.max_reg &&
              (new Date(event.registration_end_date) >= new Date() || event.registration_end_date==null) ? (
              event.team_event ? (
                session ? (
                  <div className="flex">
                    <CreateTeamDialog registerTeam={registerTeam} loading={loading}/>
                    <JoinTeam eventId={event.id} />
                  </div>
                ) : (
                  <LoginDialog textContent={["Create Team", "Join Team"]} />
                )
              ) : session ? (
                <Button
                  variant="outline"
                  className="border-2 border-white text-md bg-black mt-6"
                  onClick={register}
                  disabled={loading}
                >
                  <span className="cursor-pointer">Register Now</span>
                </Button>
              ) : (
                <LoginDialog textContent={["Register Now"]} />
              )
            ) : event.registration_count > event.max_reg ? (
              <p className="text-xl font-semibold text-[#e6d62b] mt-4">
                Registration Limit Exceeded!
              </p>
            ) : (
              <p className="text-xl font-semibold text-[#e6d62b] mt-4">
                Registration Closed!
              </p>
            )}
          </div>
        </div>
        <div className="grid justify-between col-span-12 md:col-span-6 lg:col-span-4 text-lg p-4 border-white border-[1.25px] event-desc rounded-xl bg-gray-950">
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <CalendarCheckIcon size={15} /> 
                Day: 
              <span className={`font-thin ${ChakraFont.className}`}>
                {event.day}
              </span>
          </div>
          {event.team_event && (
            <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
              <Users size={15}/>
                  Team Size: 
                <span className={`font-thin ${ChakraFont.className}`}>
                  {event.team_min} - {event.team_max} Members
                </span>
            </div>
          )}
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <MapPinIcon size={15} />
              Venue:
            <span className={`font-thin ${ChakraFont.className}`}>
              {event.venue}
            </span>
          </div>
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <Clock size={15} />
              Timings:
            <span className={`font-thin ${ChakraFont.className}`}>
              {event.time_of_event}
            </span>
          </div>
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <Hourglass size={15} />
              Duration: 
              <span className={`font-thin ${ChakraFont.className}`}>
                {event.duration} hours
              </span>
          </div>
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <Building size={15} />
              Club: 
             <span className={`font-thin ${ChakraFont.className}`}>
              {event.name_of_hosting_club}
             </span>
          </div>
          <div className={`flex gap-2 items-center font-semibold ${JuraFont.className}`}>
            <Mail size={15} /> 
            <span className={`font-thin ${ChakraFont.className}`}>
              {event.contact_mail}
            </span>
          </div>
        </div>
      </div>
      <div className="md:p-6 p-4">
        <div>
          <h1 className={`text-3xl mt-4 mb-4 font-bold ${ChakraFont.className}`}>Description</h1>
          {event.description &&
            (showDescription
              ? event.description.split("\r\n").map((point, index) => (
                  <p
                    key={index}
                    className="leading-8 mx-auto text-justify opacity-90 text-md"
                  >
                    {point}
                  </p>
                ))
              : event.description
                  .split("\r\n")
                  .slice(0, 1)
                  .map((point, index) => (
                    <p
                      key={index}
                      className="leading-8 mx-auto text-justify opacity-90 text-md"
                    >
                      {point}
                    </p>
                  )))}
          <div className="text-right">
            <span
              className="inline-block text-center text-slate-300 text-lg px-3 py-1 mt-2 mr-8 rounded-md cursor-pointer border-slate-300 border-[1.5px]"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "Read Less" : "Read More"}
            </span>
          </div>
        </div>
        <div>
          <h1 className={`text-3xl mt-4 mb-4 font-bold ${ChakraFont.className}`}>Rules and Regulations</h1>
          {event.rules.split("\r\n").map((point, index) => (
            <li key={index} className="leading-8 mx-auto opacity-90 text-justify text-md">
              {point}
            </li>
          ))}
        </div>
        {event.incharges.length > 0 && (
          <div className="mt-8">
            <h1 className={`text-3xl mb-2 font-bold ${ChakraFont.className}`}>Event Incharges</h1>
            {event.incharges.length > 0 &&
              event.incharges.map((incharge) => (
                <p className="py-2 text-[1.2em] mx-auto" key={incharge.id}>
                  {incharge.name + " - " + incharge.contact_number}
                </p>
              ))}
          </div>
        )}
      </div>
    </div></div>
    );
  }
  return <></>;
};

export default EventDetails;
