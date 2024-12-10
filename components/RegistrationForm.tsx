'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
// import { Input } from './ui/input'
import { Label } from './ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Checkbox } from './ui/checkbox'
import GeneralInfo from './GeneralInfo'
import ProfessionInfo from './ProfessionInfo'
import ContactInfo from './ContactInfo'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    // General Information
    memberNo: '',
    name: '',
    tcKimlikNo: '',
    motherName: '',
    fatherName: '',
    birthPlace: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    registeredPlace: '',

    // Profession and Institution Information
    workInstitution: '',
    title: '',
    workCity: '',

    // Address and Contact Information
    homeAddress: '',
    workAddress: '',
    phoneNumber: '',
    email: '',
    emergencyContactPhone: ''
  })

  const [isAccepted, setIsAccepted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAccepted) {
      alert('Lütfen formu kabul ediniz.')
      return
    }
    console.log('Form Submitted', formData)
    // Add form submission logic here
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with Logo and Organization Name */}
      <div className="flex items-center mb-6">
        <div className="relative w-24 h-24 mr-4 overflow-hidden">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sima_Vakf%C4%B1-removebg-preview-cjhDobtYiVK6J8MArAEz1NBFQkRlXJ.png" 
            alt="SIMA Logo" 
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            SİMA
          </h1>
          <p className="text-lg text-gray-600">
            Doğu Karadenizliler Hizmet Vakfı
          </p>
        </div>
      </div>

      <Card className="w-full shadow-lg border border-gray-200">
        <CardHeader className="bg-gray-50 border-b border-gray-200">
          <CardTitle className="text-xl font-semibold text-gray-800">Başvuru Formu</CardTitle>
        </CardHeader>
        <CardContent className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <GeneralInfo formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} />
            <ProfessionInfo formData={formData} handleChange={handleChange} />
            <ContactInfo formData={formData} handleChange={handleChange} />

            {/* ACCEPTANCE CHECKBOX */}
            <div className="border-t border-gray-200 pt-4 flex items-start gap-2">
              <Checkbox 
                id="acceptance" 
                checked={isAccepted}
                onCheckedChange={() => setIsAccepted(!isAccepted)}
              />
              <Label htmlFor="acceptance" className="text-sm text-gray-700 leading-snug">
                Tarafıma sunulan SİMA Doğu Karadenizliler Hizmet Vakfı Tüzüğünü dikkatlice okudum, 
                anladım ve tüm hükümlerini kabul ettiğimi beyan ederim. Beyanım doğrultusunda, 
                yanlış veya eksik bilgi vermem durumunda doğacak her türlü sorumluluğun tarafıma 
                ait olduğunu kabul ve taahhüt ederim.
              </Label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end">
              <Button type="submit" className="mt-4">
                Başvuruyu Gönder
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistrationForm

