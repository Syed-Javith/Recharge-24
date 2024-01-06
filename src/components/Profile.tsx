import { cookies } from "next/headers";
import { FC } from "react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const token = cookies().get("token");
  return <div>{token ? <p>{token.name}</p> : <p>token not found</p>}</div>;
};

export default Profile;
