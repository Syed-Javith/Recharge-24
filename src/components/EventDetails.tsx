"use client"
import { EventDetailSchema } from "@/types/models"
import { FC } from "react"
import { Badge } from "@/components/ui/badge"
import axios from "axios"
import { useEffect, useState } from "react"
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
import { useRouter } from "next/navigation"
import { UserJwtPayload } from "@/lib/auth"
import Clipboard from "./ClipBoard"
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
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"
import { Avatar, AvatarFallback } from "./ui/Avatar"
import Trash from "./Trash"
import { CSRBaseUrl } from "@/lib/utils"

interface EventDetailsProps {
    eventId: number;
    session: UserJwtPayload|null;
}

const EventDetails: FC<EventDetailsProps> = ({eventId,session}:EventDetailsProps) => {

    const [event,setEvent] = useState<EventDetailSchema>()
    const [refresh,setRefresh] = useState<boolean>(false)
    const [teamCode,setTeamCode] = useState<string>("")
    const [deleteId,setDeleteId] = useState<number|null>()
    const router = useRouter()

    useEffect(()=>{
        console.log(session)
        axios.get(CSRBaseUrl+ `event/event/${eventId}`,{withCredentials:true})
        .then((res)=>{
            setEvent(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[refresh,eventId])

    const register = () => {
        axios.post( CSRBaseUrl + 'event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const registerTeam = () => {
        axios.post( CSRBaseUrl + 'event/event-register/',{"event_id":event?.id},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const joinTeam = () => {
        axios.post(CSRBaseUrl + 'event/team/',{"team_code":teamCode},{withCredentials:true})
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const deleteMember = () => {
        axios.delete(CSRBaseUrl+ 'event/team/',{
            withCredentials: true,
            data : {"event_registration_id":event?.event_registration[0].id,"member_id":deleteId}
        })
        .then((res)=>{
            setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(event){
        return (
        <div className="event-description max-w-[1300px] m-auto p-4">
            <div className="event"> 
                <div className="border-b-2 border-white p-6 mt-4">

                    <h1 className="text-3xl mb-1">{event.name.toUpperCase()}</h1>
                    <div className="flex space-x-3">

                        {event.team_event ? <Badge variant="default" className="team mt-2 ">Team Event</Badge> : <Badge variant="default" className="team mt-2 ">Individual Event</Badge>}

                        {event.is_registered && <Badge variant="default" className="team mt-2 ">Registered</Badge>}

                    </div>

                    {(event.is_registered && event.team_event && event.event_registration[0].team[0].members.length>0) && 
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4">View Team Members</Button>
                        </DialogTrigger>
                        <DialogContent className="w-[96%]">
                            <DialogHeader className="text-left">
                                <DialogTitle>Team Members</DialogTitle>
                                <DialogDescription>
                                    Here are your team members for this event
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex-column">
                                {event.event_registration[0].user.email!=session?.id && 
                                    <Card className="mb-4">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="bg-white p-0.5">
                                                    <AvatarFallback>
                                                        {event.event_registration[0].user.first_name[0] + event.event_registration[0].user.last_name[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-column">
                                                    <div className="flex gap-4 my-1">
                                                        <p>{event.event_registration[0].user.first_name + " " + event.event_registration[0].user.last_name}</p>
                                                        <Badge variant="secondary">Team Lead</Badge>
                                                    </div>
                                                    <p className="text-[#808080]">{event.event_registration[0].user.email}</p>
                                                </div>
                                            </div>
                                        </CardContent>  
                                    </Card>
                                }
                                {(event.event_registration[0].team[0]?.members)?.map(
                                    (
                                        member: {
                                            email: string,
                                            first_name: string,
                                            id: number,
                                            last_name: string
                                        }
                                    )=>(
                                    <Card key={member.id} className="mb-4">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4 w-full">
                                                <Avatar className="bg-white p-0.5">
                                                    <AvatarFallback>
                                                        {member.first_name[0] + member.last_name[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-column">
                                                    <p>{member.first_name + " " + member.last_name}</p>
                                                    <p className="text-[#808080]">{member.email}</p>
                                                </div>
                                                {event.event_registration[0].user.email==session?.id &&
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <p className="ml-auto" onClick={()=>{setDeleteId(member.id)}}>
                                                                <Trash />
                                                            </p>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    Are you sure to remove this member from your team?
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogAction onClick={()=>{
                                                                    deleteMember()
                                                                }}>
                                                                    Yes, Remove
                                                                </AlertDialogAction>
                                                                <AlertDialogCancel>No, Cancel</AlertDialogCancel>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                }
                                            </div>
                                        </CardContent>  
                                    </Card>
                                ))}
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button">Close</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog> 
                    }

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

                    :<> {/* Team Event Registered -> Not a team lead */}</> : <> {/* Individual Event Registered */} </>)

                    : (event.registration_count <= event.max_reg ? (event.team_event ? (session ? 
                    <div>
                        <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4" onClick={registerTeam}>Create Team</Button>

                        <Dialog>
                            <DialogTrigger>
                                <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4">Join Team</Button>
                            </DialogTrigger>
                            <DialogContent className="w-[96%]">
                                <DialogHeader className="text-left">
                                    <DialogTitle>Enter Team Code</DialogTitle>
                                    <DialogDescription>
                                        Get the team code from team leader and paste it over here
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <Label htmlFor="teamcode">Team Code</Label>
                                    <Input id="teamcode" value={teamCode} className="col-span-3 border-1" onChange={(event)=>setTeamCode(event.target.value)} />
                                </div>
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
                                <Button variant="outline" className="border-2 border-white text-md bg-black mt-6">Create Team</Button>
                                <Button variant="outline" className="border-2 border-white text-md bg-black mt-6">Join Team</Button>
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

                    (session ? <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 block" onClick={register}>Register Now</Button> :
  
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 block">Register Now</Button>
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

                    <p className="text-xl font-semibold text-[#e6d62b] mt-4">Registrations Closed!</p>)}

                </div>

            </div>
            <div className="p-6">
                <div>
                    <h1 className="text-2xl mt-4 mb-4">Description</h1>
                    {event.description && event.description.split('\r\n').map((point,index)=>(<p key={index} className="leading-8 mb-4 text-justify">{point}</p>))}
                </div>
                <div>
                    <h1 className="text-2xl mt-4 mb-4">Rules</h1>
                    {event.rules.split('\r\n').map((point,index)=>(<li key={index} className="leading-8 text-justify whitespace-pre-wrap">{point}</li>))}
                </div>
            </div>
        </div>
        )
    }
    return <></>
  };
  
  export default EventDetails