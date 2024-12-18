import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RegistrationSuccess() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Registration Successful!</h1>
      <p className="mb-4">Your IPR registration has been submitted successfully. Our team will review your application and get back to you soon.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}

