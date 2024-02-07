import { useState } from "react";
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
} from "@/components/ui/alert-dialog";
import Trash from "../Trash";
import { Button } from "../ui/Button";

interface RemoveMemberProps {
  member: number;
  deleteMember: Function;
}

const RemoveMember = ({ member, deleteMember }: RemoveMemberProps) => {
  const [deleteId, setDeleteId] = useState<number | null>();
  const [open,setOpen] = useState<boolean>(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <p
          className="ml-auto"
          onClick={() => {
            setDeleteId(member);
          }}
        >
          <Trash />
        </p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            Are you sure to remove this member from your team?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <div className="flex gap-3 items-center">
              <Button
                variant="outline"
                className="border-2 border-white text-md bg-black px-4"
                asChild
                onClick={() => {
                  deleteMember(deleteId);
                }}
              >
                <span className="cursor-pointer">Yes, Remove</span>
              </Button>
            <Button asChild onClick={()=>setOpen(false)}>
              <span className="cursor-pointer">No, Cancel</span>
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveMember;
