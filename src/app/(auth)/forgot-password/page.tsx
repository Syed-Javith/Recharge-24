import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  
  return <div className="flex justify-center">
  <div className="max-w-[400px]">
    <ForgotPasswordForm />
  </div>
  </div>
}

export default page