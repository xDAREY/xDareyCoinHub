'use client'

import { useState, useCallback } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useDropzone } from 'react-dropzone'

const FileUpload = ({ label }: { label: string }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload here
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer">
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500 mb-2">Verify your account by uploading a clear image of your document</p>
        <Button variant="outline">
          {isDragActive ? 'Drop the file here' : 'Click to upload or drag and drop'}
        </Button>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('details')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="details">My Details</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Personal info</CardTitle>
              <CardDescription>View your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value="xDarey" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value="xDarey@reactmail.com" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" value="United Kingdom" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="package">Active Package</Label>
                <Input id="package" value="Basic" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="verification">Verification Status</Label>
                <Input id="verification" value="Pending" readOnly />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Verification details</CardTitle>
              <CardDescription>Verify your account by uploading the required document here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="document-type">Choose your preferred identification document</Label>
                <Select>
                  <SelectTrigger id="document-type">
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="id-card">Identity Card</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="drivers-license">Driver's License</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FileUpload label="Upload front side of your card" />
              <FileUpload label="Upload back side of your card" />
              <Button>Save</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

