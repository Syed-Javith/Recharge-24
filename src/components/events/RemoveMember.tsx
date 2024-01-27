import { useState } from "react"
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
import Trash from "../Trash"

interface RemoveMemberProps{
    member: number,
    deleteMember: Function
}

const RemoveMember = ({member,deleteMember}:RemoveMemberProps) => {

    const [deleteId,setDeleteId] = useState<number|null>()

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <p className="ml-auto" onClick={()=>{setDeleteId(member)}}>
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
                        deleteMember(deleteId)
                    }}>
                        Yes, Remove
                    </AlertDialogAction>
                    <AlertDialogCancel>No, Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default RemoveMember