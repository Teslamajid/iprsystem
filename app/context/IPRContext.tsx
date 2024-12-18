'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type IPRContextType = {
  user: User | null
  setUser: (user: User | null) => void
  registrations: Registration[]
  addRegistration: (registration: Registration) => void
  updateRegistration: (id: string, status: string) => void
  login: (email: string, password: string) => boolean
  logout: () => void
}

type User = {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

type Registration = {
  id: string
  userId: string
  type: 'patent' | 'trademark' | 'copyright' | 'trade-secret'
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
  documentName: string | null
}

const IPRContext = createContext<IPRContextType | undefined>(undefined)

export const IPRProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [registrations, setRegistrations] = useState<Registration[]>([])

  useEffect(() => {
    // Load user and registrations from localStorage on initial render
    const storedUser = localStorage.getItem('user')
    const storedRegistrations = localStorage.getItem('registrations')

    if (storedUser) setUser(JSON.parse(storedUser))
    if (storedRegistrations) setRegistrations(JSON.parse(storedRegistrations))
  }, [])

  useEffect(() => {
    // Save user and registrations to localStorage whenever they change
    if (user) localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('registrations', JSON.stringify(registrations))
  }, [user, registrations])

  const addRegistration = (registration: Registration) => {
    setRegistrations([...registrations, registration])
  }

  const updateRegistration = (id: string, status: string) => {
    setRegistrations(
      registrations.map((reg) =>
        reg.id === id ? { ...reg, status: status as 'pending' | 'approved' | 'rejected' } : reg
      )
    )
  }

  const login = (email: string, password: string) => {
    if (email === 'admin@ipr.com' && password === 'admin@123') {
      setUser({
        id: '1',
        name: 'Admin',
        email: 'admin@ipr.com',
        role: 'admin'
      })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <IPRContext.Provider value={{ user, setUser, registrations, addRegistration, updateRegistration, login, logout }}>
      {children}
    </IPRContext.Provider>
  )
}

export const useIPR = () => {
  const context = useContext(IPRContext)
  if (context === undefined) {
    throw new Error('useIPR must be used within an IPRProvider')
  }
  return context
}

