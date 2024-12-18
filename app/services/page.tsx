import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Patent Registration</h2>
          <p className="mb-4">Protect your inventions and secure exclusive rights to your innovations.</p>
          <Link href="/register?type=patent">
            <Button>Register Patent</Button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Trademark Registration</h2>
          <p className="mb-4">Safeguard your brand identity and distinguish your products or services.</p>
          <Link href="/register?type=trademark">
            <Button>Register Trademark</Button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Copyright Registration</h2>
          <p className="mb-4">Protect your original works of authorship, including literary, musical, and artistic creations.</p>
          <Link href="/register?type=copyright">
            <Button>Register Copyright</Button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Trade Secret Protection</h2>
          <p className="mb-4">Secure your confidential business information and maintain your competitive advantage.</p>
          <Link href="/register?type=trade-secret">
            <Button>Register Trade Secret</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

