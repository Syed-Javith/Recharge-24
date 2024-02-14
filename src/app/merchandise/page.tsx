import MerchandList from '@/components/Home/Merchandise/MerchandList';
import Neon from '@/components/Text/Neon';
import { SSRBaseUrl } from '@/lib/utils';
import { CategoryEvents } from '@/types/models';
import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react'

const page = async() => {
    // const { data } = await axios.get(SSRBaseUrl + "event/category/7/events/", {
    //     headers: { Cookie: cookies().toString() },
    //   });
    // const merchandise: CategoryEvents[] = await data;

    return (
        <>
            {/* <MerchandList merchandise={merchandise} /> */}
        <div className='text-center m-auto h-screen w-screen mt-[15%]'>
        <Neon text='No Merchandise Available' />
        </div>
        </>
      )
}

export default page