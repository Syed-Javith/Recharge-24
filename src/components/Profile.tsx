import { UserProfileSchema } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/Card";
import { SSRBaseUrl } from "@/lib/utils";

interface ProfileProps {}

const Profile: FC<ProfileProps> = async ({}) => {
  const res = await fetch(SSRBaseUrl + "authenticate/profile/", {
    headers: { Cookie: cookies().toString() },
  });
  const profile: UserProfileSchema = await res.json();
  console.log(profile)
  return (
    <Card className="max-w-xl" key={profile.email}>
      <CardTitle>{profile.first_name + " " + profile.last_name}</CardTitle>
      <CardDescription>{profile.mobile_number}</CardDescription>
      <CardContent>
        <div>
          <div className="font-bold">Registered Proshows</div>
          {profile.proshow_registrations.length > 0 ? (
            profile.proshow_registrations.map((proshow_registration) => (
              <p key={proshow_registration.proshow.id}>
                {JSON.stringify(proshow_registration.proshow.name)}
              </p>
            ))
          ) : (
            <h3>-</h3>
          )}

        </div>
      </CardContent>
      <CardContent>
        <div>
          <div className="font-bold">Registered Proshows</div>
          {profile.event_registrations.length > 0 ? (
            profile.event_registrations.map((event_registration) => (
              <p key={event_registration.id}>
                {JSON.stringify(event_registration.name)}
              </p>
            ))
          ) : (
            <h3>-</h3>
          )}
        </div>
      </CardContent>
      <CardDescription className="max-w-[150px]">
        <img src={profile.qr_code && profile.qr_code} alt="Unique user id" />
      </CardDescription>
    </Card>
  );
};

export default Profile;
