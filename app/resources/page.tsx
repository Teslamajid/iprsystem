import Link from 'next/link'

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">IPR Resources</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Educational Materials</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Introduction to Intellectual Property Rights
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Understanding Patents: A Comprehensive Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Trademark Basics: Protecting Your Brand
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Copyright Essentials for Creators
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                How long does the registration process take?
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                What are the fees associated with IPR registration?
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Can I register my IPR internationally through this platform?
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Video: How to Submit a Patent Application
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Step-by-Step Guide: Trademark Registration Process
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Webinar: Protecting Your Trade Secrets
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

