import { Category } from "@/types/models";
import Card from "@/components/events/CategoryCard";
import Link from "next/link";
import { SSRBaseUrl } from "@/lib/utils";
import axios from "axios";


const page = async ({ }) => {
  const {data} = await axios.get(SSRBaseUrl + "event/category/");
  const categories: Category[] = await data;
  return (
    <div className="flex flex-col justify-center">
      <h1 style={{ fontSize: '72px', margin: "auto" }}>EVENTS</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 content-center md:m-auto m-0">
        {
          categories.map((category) => (
            <Link href={"/event/" + category.id} key={category.id}>
              <Card
                image={category?.image}
                title={category.category_name}
                events_count={category?.events_count}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default page;
