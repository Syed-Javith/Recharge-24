import { ProShow } from "@/types/models";
import axios from "axios";

const page = async ({}) => {
  const res = await axios.get("http://localhost:8000/proshow/proshows/", {
    withCredentials: true,
  });
  const proshows: ProShow[] = res.data;
  console.log(proshows);
  return (
    <div>
      <h1>Show proshows list</h1>
      <div>
        {proshows.map((proshow) => (
          <p>{proshow.name}</p>
        ))}
      </div>
    </div>
  );
};

export default page;
