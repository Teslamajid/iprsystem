import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Sierra Leone IPR Registration</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Protect your intellectual property with our easy-to-use online registration system for patents, trademarks,
        copyrights, and trade secrets.
      </p>
      <div className="flex space-x-4">
        <Link href="/register">
          <Button>Register IPR</Button>
        </Link>
        <Link href="/resources">
          <Button variant="outline">Learn More</Button>
        </Link>
      </div>
    </div>
  )
}

