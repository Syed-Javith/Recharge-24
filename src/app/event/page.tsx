import { Category } from "@/types/models";
import Card from "@/components/events/CategoryCard";
import Link from "next/link";
import { SSRBaseUrl } from "@/lib/utils";
import axios from "axios";
import "./style.css";

const page = async () => {
  const { data } = await axios.get(SSRBaseUrl + "event/category/");
  const categories: Category[] = await data;
  return (
    <div>
      <p id="cat-title">Categories</p>
      <div className="flex justify-center items-center flex-wrap category-container mt-12">
        {categories.map((category) => (
          <Link key={category.id} href={"/event/" + category.id}>
            <div className="mb-12 category-element">
            <div className=" category-wrapper">
              <img
                src={category.image}
                id="cat-blur"
                className="h-[380px] w-[380px]"
              />
              <img
                src={category.image}
                id="cat-normal"
                className="h-[330px] w-[330px]"
              />
              <div className="cat-big-circle"></div>
              <div className="cat-big-circle"></div>
              <div className="cat-small-circle"></div>
              <div className="cat-small-circle"></div>
              <div className="cat-square"></div>
              <div className="cat-square"></div>
            </div>
            <span>{category.category_name}</span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
