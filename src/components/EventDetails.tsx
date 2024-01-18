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

interface EventDetailsProps {
    eventId: string;
    session: UserJwtPayload|null;
}

const EventDetails: FC<EventDetailsProps> = ({eventId,session}:EventDetailsProps) => {
    const [event,setEvent] = useState<EventDetailSchema>()
    const [refresh,setRefresh] = useState<boolean>(false)
    const router = useRouter()

    useEffect(()=>{
        console.log(session)
        axios.get(`http://localhost:8000/event/event/${eventId}`,{withCredentials:true})
        .then((res)=>{
            setEvent(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[refresh,eventId])

    const register = () => {
        axios.post('http://localhost:8000/event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            setRefresh(true)
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

                    {event.team_event ? <Badge variant="default" className="team mt-2 ">Team Event</Badge> : <Badge variant="default" className="team mt-2 ">Individual Event</Badge>}

                    {event.is_registered ? (event.team_event ? <></>: <></>) : (event.registration_count <= event.max_reg ? (event.team_event ? (session ? <div className="team-grp"><button className="register-btn">Create Team</button><button className="register-btn">Join Team</button></div> : 
                    <>
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
                    </AlertDialog>
                    </>
                    ) : 
                    (session ? <button className="register-btn block" onClick={register}>Register Now</button> :
                    <>
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
                    </AlertDialog>
                    </>)) : <p className="reg-closed">Registrations Closed!</p>)}

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