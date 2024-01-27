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
import { Button } from "../ui/Button"
import { useState } from "react"

interface JoinTeamProps{
    joinTeam: Function
}

const JoinTeam = ({joinTeam}:JoinTeamProps) => {

    const [teamCode,setTeamCode] = useState<string>("")

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="border-2 border-white text-md bg-black mt-6 mr-4 text-center" asChild>
                    <span className="cursor-pointer">Join Team</span>
                </Button>
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
                        <Button type="button" className="block w-full text-center" onClick={()=> joinTeam(teamCode)} asChild>
                            <span className="cursor-pointer">Join Team</span>
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog> 
    )
}

export default JoinTeam