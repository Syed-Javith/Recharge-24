import { Loader2 } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div>
      <Loader2 className="animate-spin mx-auto mt-[25%]" size={40} />
    </div>
  )
}

export default loading
