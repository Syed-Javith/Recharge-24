import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { UserProfileSchema } from "@/types/models";
import axios from "axios";
import { cookies } from "next/headers";

const page = async ({}) => {
  try {
    const res = await fetch("https://api.rechargefest.in/authenticate/profile/", {
      headers: { Cookie: cookies().toString() },
    });
    const profile: UserProfileSchema = await res.json();
    console.log(profile);
    return (
      <div>
        <h1>Your Profile</h1>
        <div>
          <Card className="max-w-xl" key={profile.email}>
            <CardTitle>
              {profile.first_name + " " + profile.last_name}
            </CardTitle>
            <CardDescription>{profile.mobile_number}</CardDescription>
            <CardContent>
              <div>
                <div className="font-bold">Registered Proshows</div>
                {profile.proshow_registrations.map((proshow_registration) => (
                  <p key={proshow_registration.proshow.id}>
                    {JSON.stringify(proshow_registration.proshow.name)}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardDescription>{profile.event_registrations}</CardDescription>
            <CardDescription className="max-w-[150px]">
              <img src={profile.qr_code ? profile.qr_code : "abc.png"} />
            </CardDescription>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching proshows:", error);
  }
};

export default page;
