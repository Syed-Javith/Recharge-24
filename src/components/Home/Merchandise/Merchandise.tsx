import Neon from '@/components/Text/Neon'
import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const SketchFont = localFont({ src: '../../../../public/fonts/chakra.ttf' })
const Merchandise = () => {
    return (
        <div className='md:w-[70%] w-[80vh] m-auto min-h-[50vh]'>
            <div className="flex md:flex-row flex-col container">
                <div className='px-4 md:w-full w-[50%]'>
                    <Neon text='MERCHANDISE' />
                    <p className={`${SketchFont.className} text-md`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, 
\                        mollitia beatae quaerat quisquam officiis voluptates quos id sed facilis vitae totam ut eos exercitationem. Cumque incidunt quas quod placeat non!
                    </p>
                    <Link href={'/merchandise'}>
                        <Button className='mt-8'>
                            Buy merchandise
                        </Button>
                    </Link>
                </div>
                <div>
                    <img src="/shirt-unscreen.gif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Merchandise
