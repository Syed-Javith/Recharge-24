import MerchandList from '@/components/Home/Merchandise/MerchandList';
import { SSRBaseUrl } from '@/lib/utils';
import { CategoryEvents } from '@/types/models';
import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react'

const page = async() => {
    const { data } = await axios.get(SSRBaseUrl + "event/category/14/events/", {
        headers: { Cookie: cookies().toString() },
      });
    const merchandise: CategoryEvents[] = await data;

    return (
            <MerchandList merchandise={merchandise} />
    )
}

export default page