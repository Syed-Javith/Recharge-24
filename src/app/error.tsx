'use client'

import { Button } from '@/components/ui/Button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex min-h-screen items-center justify-center '>
      <div>
        <h2 className="self-center text-center text-2xl">Oops! Something went wrong!</h2>
        <Button
          className='m-auto mt-4 text-center'
          onClick={
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  )
}