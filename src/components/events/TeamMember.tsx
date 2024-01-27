import { Card, CardContent } from "../ui/Card"
import { Avatar, AvatarFallback } from "../ui/Avatar"
import { Badge } from "../ui/badge"
import RemoveMember from "./RemoveMember"

interface TeamMemberProps{
    currentUser: string,
    leader: {
        id: number, 
        email: string, 
        first_name: string,
        last_name: string
    },
    member: {
        id: number, 
        email: string, 
        first_name: string,
        last_name: string
    },
    deleteMember: Function
}

const TeamMember = ({currentUser,member,deleteMember,leader}:TeamMemberProps) => {
    return (
        <Card className="mb-4">
            <CardContent className="p-4">
                <div className="flex items-center gap-4 w-full">
                    <Avatar className="bg-white p-0.5">
                        <AvatarFallback>
                            {member.first_name[0] + member.last_name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-column">
                        <div className="flex gap-4 my-1">
                            <p>{member.first_name + " " + member.last_name}</p>
                            {leader.email==member.email ? <Badge variant="secondary">Team Lead</Badge> : <></>}
                        </div>
                        <p className="text-[#808080]">{member.email}</p>
                    </div>
                    {leader.email==currentUser ?
                        <RemoveMember member={member.id} deleteMember={deleteMember}/>
                        :<></>
                    }
                </div>
            </CardContent>  
        </Card>
    )
}

export default TeamMember