import { Category } from "@/types/models";
import Card from "@/components/events/CategoryCard";
import Link from "next/link";
import { SSRBaseUrl } from "@/lib/utils";


const page = async ({ }) => {
  const res = await fetch(SSRBaseUrl + "event/category/");
  const categories: Category[] = await res.json();
  return (
    <div className="flex flex-col justify-center">
      <h1 style={{ fontSize: '72px', margin: "auto" }}>EVENTS</h1>
      <div className="grid md:flex-row md:items-center md:grid-cols-2 grid-cols-1 gap-12 content-center md:m-4 xl:m-auto m-4">
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
