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
import { Button } from "../ui/Button";
import { useState } from "react";

interface CreateTeamDialogProps {
  registerTeam: Function;
  loading: boolean
}

const CreateTeamDialog = ({ registerTeam,loading }: CreateTeamDialogProps) => {

  const [open,setOpen] = useState<boolean>(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-2 border-white text-md bg-black mt-6 mr-4"
            asChild
          >
            <span className="cursor-pointer">Create Team</span>
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-left">Points to be noted</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            <div className="leading-8 text-md">
                <li>Once a team is created, it can&apos;t be deleted.</li>
                <li>Only team leader needs to pay for a event.</li>
                <li>Other team members can join the team using the team code generated after successful payment.</li>
                <li>Only team leader can remove other team members.</li>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex gap-3 items-center">
            <Button
              variant="outline"
              className="border-2 border-white text-md bg-black"
              asChild
              onClick={() => registerTeam()}
              disabled={loading}
            >
              <span className="cursor-pointer">Create Team</span>
            </Button>
            <Button asChild onClick={()=>setOpen(false)}>
                <span className="cursor-pointer">Cancel</span>
            </Button>
            </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateTeamDialog;