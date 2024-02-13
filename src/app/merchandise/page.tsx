import MerchandList from '@/components/Home/Merchandise/MerchandList';
import { SSRBaseUrl } from '@/lib/utils';
import { CategoryEvents } from '@/types/models';
import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react'

const page = async() => {
    const { data } = await axios.get(SSRBaseUrl + "event/category/7/events/", {
        headers: { Cookie: cookies().toString() },
      });
    const merchandise: CategoryEvents[] = await data;

    return (
        <div className='flex md:flex-row flex-col gap-8'>
            <MerchandList merchandise={merchandise} />
        </div>
    )
}

export default page