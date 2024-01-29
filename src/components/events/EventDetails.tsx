"use client";
import { EventDetailSchema } from "@/types/models";
import { FC, useState } from "react";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserJwtPayload } from "@/lib/auth";
import Clipboard from "../ClipBoard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/Button";
import { CSRBaseUrl } from "@/lib/utils";
import MembersDialog from "./MembersDialog";
import LoginDialog from "./LoginDialog";
import JoinTeam from "./JoinTeam";

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
      <div className="max-w-[1300px] m-auto md:p-4 p-2">
        <div className="grid grid-cols-12 gap-6 justify-between md:p-6 p-4 mt-4 border-b-2 border-white">
          <div className="flex gap-6 md:col-span-6 lg:col-span-8 col-span-12">
            <img
              src={event.image}
              alt="Event Image"
              width={250}
              className="max-w-[340px] flex-1 lg:block hidden object-cover border-[1.5px] rounded-xl"
            />
            <div>
              <h1 className="text-3xl mb-1">{event.name.toUpperCase()}</h1>
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

              {event.pay == 0 ? (
                <div className="text-yellow-300 font-semibold text-xl">
                  {" "}
                  Free Event
                </div>
              ) : (
                <div className="text-yellow-300 font-semibold text-xl">
                  Amount: Rs. {event.pay}
                </div>
              )}

              {event.prize && (
                <div className="text-blue-300 font-semibold text-xl py-1">
                  Prize Amount: Rs. {event.prize}
                </div>
              )}

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
                              <Clipboard />
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
              ) : event.registration_count <= event.max_reg ? (
                event.team_event ? (
                  session ? (
                    <div>
                      <Button
                        variant="outline"
                        className="border-2 border-white text-md bg-black mt-6 mr-4"
                        onClick={registerTeam}
                        disabled={loading}
                      >
                        <span className="cursor-pointer">Create Team</span>
                      </Button>
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
              ) : (
                <p className="text-xl font-semibold text-[#e6d62b] mt-4">
                  Registrations Closed!
                </p>
              )}
            </div>
          </div>
          <div className="grid justify-between col-span-12 md:col-span-6 lg:col-span-4 text-lg p-4 border-white border-[1.25px] rounded-md">
            <div>Day: {event.day}</div>
            {event.team_event && (
              <div>
                Team Size: {event.team_min} - {event.team_max} Members
              </div>
            )}
            <div>Venue: {event.venue}</div>
            <div>Timings: {event.time_of_event}</div>
            <div>Duration: {event.duration} hours</div>
            <div>Contact: {event.contact_mail}</div>
          </div>
        </div>
        <div className="md:p-6 p-4">
          <div>
            <h1 className="text-2xl mt-4 mb-4">Description</h1>
            {event.description &&
              (showDescription
                ? event.description.split("\r\n").map((point, index) => (
                    <p key={index} className="leading-8 mb-4 text-justify text-md">
                      {point}
                    </p>
                  ))
                : event.description
                    .split("\r\n")
                    .slice(0, 1)
                    .map((point, index) => (
                      <p key={index} className="leading-8 mb-4 text-justify text-md">
                        {point}
                      </p>
                    )))}
            <div className="text-right">
              <span
                className="inline-block text-center text-slate-300 text-lg px-5 py-2 mt-2 rounded-md cursor-pointer border-slate-300 border-[1.5px]"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? "Read Less" : "Read More"}
              </span>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-2xl mt-4 mb-4">Rules and Regulations</h1>
                </AccordionTrigger>
                <AccordionContent>
                  {event.rules.split("\r\n").map((point, index) => (
                    <li key={index} className="leading-8 text-justify text-md">
                      {point}
                    </li>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default EventDetails;
