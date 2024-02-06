import NotFound from '@/components/Home/NotFound'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center w-auto max-w-[500px] m-auto items-center'>
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
