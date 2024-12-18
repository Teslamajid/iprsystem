'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useIPR } from '../context/IPRContext'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminPanel() {
  const { user, registrations, updateRegistration } = useIPR()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login')
    }
  }, [user, router])

  if (!user || user.role !== 'admin') {
    return null
  }

  const handleStatusUpdate = (id: string, newStatus: 'approved' | 'rejected') => {
    updateRegistration(id, newStatus)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Document</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrations.map((reg) => (
            <TableRow key={reg.id}>
              <TableCell>{reg.id}</TableCell>
              <TableCell>{reg.type}</TableCell>
              <TableCell>{reg.status}</TableCell>
              <TableCell>{new Date(reg.createdAt).toLocaleString()}</TableCell>
              <TableCell>{reg.documentName || 'No document'}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button onClick={() => handleStatusUpdate(reg.id, 'approved')} disabled={reg.status === 'approved'}>
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleStatusUpdate(reg.id, 'rejected')}
                    variant="destructive"
                    disabled={reg.status === 'rejected'}
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

