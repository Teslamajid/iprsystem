'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useIPR } from '../context/IPRContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileUpload } from '../components/FileUpload'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [iprType, setIprType] = useState('')
  const [description, setDescription] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const { addRegistration } = useIPR()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newRegistration = {
      id: Date.now().toString(),
      userId: email, // Using email as userId for simplicity
      type: iprType as 'patent' | 'trademark' | 'copyright' | 'trade-secret',
      status: 'pending',
      createdAt: new Date().toISOString(),
      documentName: uploadedFile ? uploadedFile.name : null,
    }
    addRegistration(newRegistration)
    
    // Here you would typically upload the file to a server
    if (uploadedFile) {
      console.log('File to upload:', uploadedFile)
      // Implement file upload logic here
    }
    
    router.push('/registration-success')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register IPR</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="iprType">IPR Type</Label>
          <Select onValueChange={setIprType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select IPR type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patent">Patent</SelectItem>
              <SelectItem value="trademark">Trademark</SelectItem>
              <SelectItem value="copyright">Copyright</SelectItem>
              <SelectItem value="trade-secret">Trade Secret</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <FileUpload onFileSelect={(file) => setUploadedFile(file)} />
        <Button type="submit" className="w-full">Register IPR</Button>
      </form>
    </div>
  )
}

