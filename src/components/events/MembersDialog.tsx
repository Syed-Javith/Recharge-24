import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/Button";
import { EventDetailSchema } from "@/types/models";
import TeamMember from "./TeamMember";

interface MembersDialogProps {
  event: EventDetailSchema;
  user: string;
  deleteMember: Function;
}

const MembersDialog = ({ event, user, deleteMember }: MembersDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="border-2 border-white text-md bg-black mt-6 mr-4 text-center"
          asChild
        >
          <span className="cursor-pointer">View Team Members</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[96%]">
        <DialogHeader className="text-left">
          <DialogTitle>Team Members</DialogTitle>
          <DialogDescription>
            Here are your team members for this event
          </DialogDescription>
        </DialogHeader>
        <div className="flex-column">
          {event.event_registration[0].user.email != user ? (
            <TeamMember
              member={event.event_registration[0].user}
              currentUser={user}
              deleteMember={deleteMember}
              leader={event.event_registration[0].user}
            />
          ) : (
            <></>
          )}
          {event.event_registration[0].team[0]?.members?.map(
            (member: {
              email: string;
              first_name: string;
              id: number;
              last_name: string;
            }) => (
              <div key={member.id}>
                {member.email != user && (
                  <TeamMember
                    member={member}
                    currentUser={user}
                    leader={event.event_registration[0].user}
                    deleteMember={deleteMember}
                  />
                )}
              </div>
            )
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button asChild>
              <span className="cursor-pointer">Close</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MembersDialog;
