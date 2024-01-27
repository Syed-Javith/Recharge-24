import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import { Category } from "@/types/models";
import Link from "next/link";

const page = async ({}) => {
  const res = await fetch("http://127.0.0.1:8000/event/category/");
  const categories: Category[] = await res.json();
  return (
    <div>
      <h1>Events</h1>
      <div>
        {categories.map((category) => (
          <Link href={"/event/" + category.id}>
          <Card className="max-w-xl" key={category.id}>
            <CardHeader><img src={category.image} alt="" /></CardHeader>
            <CardTitle>{category.category_name}</CardTitle>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
