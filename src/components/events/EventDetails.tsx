"use client"
import { EventDetailSchema } from "@/types/models"
import { FC } from "react"
import { Badge } from "@/components/ui/badge"
import axios from "axios"
import { useRouter } from "next/navigation"
import { UserJwtPayload } from "@/lib/auth"
import Clipboard from "../ClipBoard"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip" 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"  
import { Button } from "../ui/Button"
import { CSRBaseUrl } from "@/lib/utils"
import MembersDialog from "./MembersDialog"
import LoginDialog from "./LoginDialog"
import JoinTeam from "./JoinTeam"

interface EventDetailsProps {
    event: EventDetailSchema;
    session: UserJwtPayload|null;
}

const EventDetails: FC<EventDetailsProps> = ({event,session}:EventDetailsProps) => {

    const router = useRouter()

    const register = () => {
        axios.post( CSRBaseUrl + 'event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            router.refresh()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const registerTeam = () => {
        axios.post( CSRBaseUrl + 'event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            router.refresh()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const joinTeam = (teamCode:string) => {
        axios.post(CSRBaseUrl + 'event/team/',{"team_code":teamCode},{withCredentials:true})
        .then((res)=>{
            router.refresh()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const deleteMember = (deleteId:number) => {
        axios.delete(CSRBaseUrl+ 'event/team/',{
            withCredentials: true,
            data : {"event_registration_id":event?.event_registration[0].id,"member_id":deleteId}
        })
        .then((res)=>{
            router.refresh()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(event){
        return (
        <div className="max-w-[1300px] m-auto md:p-4 p-2">
            <div className="grid grid-cols-12 gap-6 justify-between md:p-6 p-4 mt-4 border-b-2 border-white"> 
                <div className="flex gap-6 md:col-span-6 lg:col-span-8 col-span-12">
                    <img src={event.image} alt="Event Image" width={250} className="max-w-[340px] flex-1 lg:block hidden object-cover border-[1.5px] rounded-xl"/>
                    <div>
                        <h1 className="text-3xl mb-1">{event.name.toUpperCase()}</h1>
                        <div className="flex space-x-3 mb-4">
                            {event.team_event ? <Badge variant="default" className="team mt-2 ">Team Event</Badge> : <Badge variant="default" className="team mt-2 ">Individual Event</Badge>}
                            {event.is_registered && <Badge variant="default" className="team mt-2 ">Registered</Badge>}
                        </div>

                        {event.pay==0 ? 
                            <div className="text-yellow-300 font-semibold text-xl"> Free Event</div>:
                            <div className="text-yellow-300 font-semibold text-xl">Amount: Rs. {event.pay}</div>}
        
                        {event.prize && <div className="text-blue-300 font-semibold text-xl py-1">Prize Amount: Rs. {event.prize}</div>}

                        {(event.is_registered && event.team_event && event.event_registration[0]?.team[0]?.members.length>0) && session ?
                            <MembersDialog event={event} user={session.id} deleteMember={deleteMember}/>:<></>
                        }

                        {event.is_registered ? (event.team_event ? (event.event_registration[0].user.email==session?.id) ? 

                        <div className="inline-block p-2 mt-4 border-2 border-white outline-none bg-black rounded-lg">Team Code: 
                            <input type="text" value={event.event_registration[0].team_code} id="team-code" className="w-[120px] outline-none px-1 bg-black" readOnly/>
                            <span className="cursor-pointer" onClick={()=>{
                            navigator.clipboard.writeText((document.getElementById("team-code") as HTMLInputElement).value)}}> 
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Clipboard /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Copy to Clipboard</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </span>
                        </div> :<> </> : <>  </>)

                        : (event.registration_count <= event.max_reg ? (event.team_event ? (session ? 
                        <div>
                            <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4" onClick={registerTeam} asChild><span className="cursor-pointer">Create Team</span></Button>
                            <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4" onClick={registerTeam} asChild>Create Team</Button>
                            <JoinTeam joinTeam={joinTeam} /> 
                        </div> : 
                        <LoginDialog textContent={["Create Team","Join Team"]}/>) : 

                        (session ? <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 block" onClick={register} asChild>
                            <span className="cursor-pointer">Register Now</span>
                        </Button> :  <LoginDialog textContent={["Register Now"]}/>)) : 

                        <p className="text-xl font-semibold text-[#e6d62b] mt-4">Registrations Closed!</p>)}

                    </div>
                </div>
                <div className="grid justify-between col-span-12 md:col-span-6 lg:col-span-4 text-lg p-4 border-white border-[1.25px] rounded-md"> 
                        <div>Day: {event.day}</div>
                        {event.team_event && <div>Team Size: {event.team_min} - {event.team_max} Members</div>}
                        <div>Venue: {event.venue}</div>
                        <div>Timings: {event.time_of_event}</div>
                        <div>Duration: {event.duration} hours</div>
                        <div>Contact: {event.contact_mail}</div>
                </div>
            </div>
            <div className="md:p-6 p-4">
                <div>
                    <h1 className="text-2xl mt-4 mb-4">Description</h1>
                    {event.description && event.description.split('\r\n').map((point,index)=>(<p key={index} className="leading-8 mb-4 text-justify">{point}</p>))}
                </div>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h1 className="text-2xl mt-4 mb-4">Rules and Regulations</h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                {event.rules.split('\r\n').map((point,index)=>(<li key={index} className="leading-8 text-justify">{point}</li>))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        )
    }
    return <></>
  };
  
  export default EventDetails