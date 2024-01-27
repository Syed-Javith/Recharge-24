// import {
//   Card,
//   CardTitle,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/Card";
import { Category } from "@/types/models";
import  Card  from "@/components/events/CategoryCard";
import Link from "next/link";
import { SSRBaseUrl } from "@/lib/utils";
// import { useRouter } from "next/router";

const page = async ({}) => {
  // const router = useRouter();
  // router.reload();
  const res = await fetch(SSRBaseUrl + "event/category/");
  const categories: Category[] = await res.json();
  return (
    <div className="flex justify-center">
      <h1 style={{fontSize: '72px'}}>EVENTS</h1>
      <div className="grid grid-cols-3 gap-12 content-center">
        {categories.map((category) => (
          <Link href={"/event/" + category.id} key={category.id}>
          <Card
            image={category?.image}
            title={category.category_name}
            events_count={category.events_count}
          />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
