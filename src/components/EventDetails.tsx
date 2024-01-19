"use client"
import { EventDetailSchema } from "@/types/models"
import '../app/event/[categoryId]/[eventId]/eventId.css'
import { FC } from "react";
import { Badge } from "@/components/ui/badge"
import axios from "axios";
import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation";
import { UserJwtPayload } from "@/lib/auth";
import Clipboard from "./ClipBoard";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Button } from "./ui/Button";
interface EventDetailsProps {
    eventId: number;
    session: UserJwtPayload|null;
}

const EventDetails: FC<EventDetailsProps> = ({eventId,session}:EventDetailsProps) => {

    const [event,setEvent] = useState<EventDetailSchema>()
    const [refresh,setRefresh] = useState<boolean>(false)
    const [teamCode,setTeamCode] = useState<string>("")
    const router = useRouter()

    useEffect(()=>{
        console.log(session)
        axios.get(`http://localhost:8000/event/event/${eventId}`,{withCredentials:true})
        .then((res)=>{
            setEvent(res.data)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[refresh,eventId])

    const register = () => {
        axios.post('http://localhost:8000/event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const registerTeam = () => {
        axios.post('http://localhost:8000/event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const joinTeam = () => {
        axios.post('http://localhost:8000/event/team/',{"team_code":teamCode},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(event){
        return (
        <div className="event-description">
            <div className="event"> 
                <div className="event-bg">

                    <h1 className="text-3xl">{event.name.toUpperCase()}</h1>

                    <div className="flex space-x-3">

                        {event.team_event ? <Badge variant="default" className="team mt-2 ">Team Event</Badge> : <Badge variant="default" className="team mt-2 ">Individual Event</Badge>}

                        {event.is_registered && <Badge variant="default" className="team mt-2 ">Registered</Badge>}

                    </div>

                    {event.is_registered ? (event.team_event ? (event.event_registration[0].user.email==session?.id) ? 

                    <div className="inline-block p-2 mt-6 border-2 border-white outline-none bg-black rounded-lg">Team Code: 
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
                    </div>

                    // Team lead can remove team members if he wanted to 

                    :<> {/* View Team Members */} </> : <> {/* Individual Event Registered */} </>)

                    : (event.registration_count <= event.max_reg ? (event.team_event ? (session ? <div className="team-grp">
                        <button className="register-btn" onClick={registerTeam}>Create Team</button>

                        <Dialog>
                            <DialogTrigger>
                                <button className="register-btn">Join Team</button>
                            </DialogTrigger>
                            <DialogContent className="w-[96%]">
                                <DialogHeader className="text-left">
                                <DialogTitle>Enter Team Code</DialogTitle>
                                <DialogDescription>
                                    Get the team code from team leader and paste it over here
                                </DialogDescription>
                                <div className="grid gap-4 py-4">
                                    <Label htmlFor="teamcode">Team Code</Label>
                                    <Input id="teamcode" value={teamCode} className="col-span-3 border-1" onChange={(event)=>setTeamCode(event.target.value)} />
                                </div>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" className="block w-full" onClick={joinTeam}>Join Team</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>  
                    </div> : 

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <div className="team-grp">
                                <button className="register-btn">Create Team</button>
                                <button className="register-btn">Join Team</button>
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Login to Continue</AlertDialogTitle>
                                <AlertDialogDescription>You have to be logged in to register for an event</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction onClick={()=>{router.push("/login")}}>Login Now</AlertDialogAction>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>) : 

                    (session ? <button className="register-btn block" onClick={register}>Register Now</button> :
  
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="register-btn block">Register Now</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Login to Continue</AlertDialogTitle>
                                <AlertDialogDescription>You have to be logged in to register for an event</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction onClick={()=>{router.push("/login")}}>Login Now</AlertDialogAction>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>)) : 

                    <p className="reg-closed">Registrations Closed!</p>)}

                </div>

            </div>
            <div className="event-info">
                <div className="description">
                    <h1>Description</h1>
                    {event.description && event.description.split('\r\n').map((point,index)=>(<p key={index}>{point}</p>))}
                </div>
                <div className="rules">
                    <h1>Rules</h1>
                    {event.rules.split('\r\n').map((point,index)=>(<li key={index}>{point}</li>))}
                </div>
            </div>
        </div>
        )
    }
    return <></>
  };
  
  export default EventDetails