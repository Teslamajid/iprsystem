'use client'

import React from 'react'
import Link from 'next/link'
import { useIPR } from '../context/IPRContext'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

const Header: React.FC = () => {
  const { user, logout } = useIPR()

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <span className="text-2xl font-bold">Sierra Leone IPR</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              {user.role === 'admin' && (
                <Link href="/admin">
                  <Button variant="secondary">Admin Panel</Button>
                </Link>
              )}
              <Button onClick={logout} variant="secondary">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="secondary">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

