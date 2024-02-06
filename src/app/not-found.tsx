import NotFound from '@/components/Home/NotFound'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center m-auto items-center w-auto absolute top-[50%] left-[25%] gap-[4rem]'>
		<div className='text-[10rem]'>
			<div className='glitch'>
				4
			</div>
		</div>
		<NotFound />
		<div className='text-[10rem]'>
			<div className="glitch">
				4
			</div>
		</div>
	</div>
  )
}

export default NotFoundPage
