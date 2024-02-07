import { Category } from "@/types/models";
import Link from "next/link";
import { SSRBaseUrl } from "@/lib/utils";
import axios from "axios";
import CatStyle from  "./Category.module.css";
import localFont from 'next/font/local'


const JuraFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const ChakraFont = localFont({ src: '../../../public/fonts/chakra.ttf' })

const page = async () => {
  const { data } = await axios.get(SSRBaseUrl + "event/category/");
  const categories: Category[] = await data;
  
  return (
    <div>
      <p className={`${JuraFont.className} ${CatStyle.cat_title}`}>CATEGORIES</p>
      <div className="flex justify-center items-center flex-wrap category-container">
        {categories.map((category) => (
          category.events_count != 0 &&
          <Link key={category.id} href={"/event/" + category.id}>
            <div className={`mb-12 ${CatStyle.category_element}`}>
            <div className={CatStyle.category_wrapper}>
              <img
                src={category.image}
                className= {`h-[380px] w-[380px] ${CatStyle.cat_blur}`}
              />
              <img
                src={category.image}

                className= {`h-[330px] w-[330px] ${CatStyle.cat_normal}`}
              />
              <div className={CatStyle.cat_big_circle}></div>
              <div className={CatStyle.cat_big_circle}></div>
              <div className={CatStyle.cat_small_circle}></div>
              <div className={CatStyle.cat_small_circle}></div>
              <div className={CatStyle.cat_square}></div>
              <div className={CatStyle.cat_square}></div>
            </div>
            <span className={`${CatStyle.cat_event_name} ${ChakraFont.className}`}>{category.category_name}</span>
            <span className={CatStyle.cat_count}>{category.events_count} {category.events_count==1 ? 'EVENT' : "EVENTS"}</span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
