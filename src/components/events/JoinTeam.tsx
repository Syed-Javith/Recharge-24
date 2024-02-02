"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "../ui/Button";
import { useState } from "react";
import { CSRBaseUrl } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface JoinTeamProps {
  eventId: number;
}

const JoinTeam = ({ eventId }: JoinTeamProps) => {
  const [teamCode, setTeamCode] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const { mutate: joinTeam, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        CSRBaseUrl + "event/team/",
        { team_code: teamCode, event_id: eventId },
        { withCredentials: true }
      );
      router.refresh();
      setOpen(false);
      return res;
    },
    onError: (err: any) => {
      if (err) {
        toast.error(err?.response?.data?.detail ?? "Invalid Request");
      } else {
        toast.error("Some error occurred. Please try again later.");
      }
    },
    onSuccess: (res: any) => {
      toast.success("Joined team successfully");
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          variant="outline"
          className="border-2 border-white text-md bg-black mt-6 mr-4 text-center"
          asChild
        >
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
          <Input
            id="teamcode"
            value={teamCode}
            className="col-span-3 border-1"
            onChange={(event) => setTeamCode(event.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            disabled={isPending}
            className="w-full text-center"
            onClick={() => joinTeam()}
          >
            Join Team{isPending && <Loader2 className="animate-spin ml-2" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeam;
