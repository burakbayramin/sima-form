import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ContactInfoProps {
  formData: {
    homeAddress: string;
    workAddress: string;
    phoneNumber: string;
    email: string;
    emergencyContactPhone: string;
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ContactInfo: React.FC<ContactInfoProps> = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-2">
        Adres ve İletişim Bilgileri
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Ev Adresi</Label>
          <Input 
            type="text" 
            name="homeAddress" 
            value={formData.homeAddress} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">İş Adresi</Label>
          <Input 
            type="text" 
            name="workAddress" 
            value={formData.workAddress} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Cep Telefonu</Label>
          <Input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">E-posta Adresi</Label>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="md:col-span-2">
          <Label className="mb-1">Ulaşılabilecek Yakın Telefon</Label>
          <Input 
            type="tel" 
            name="emergencyContactPhone" 
            value={formData.emergencyContactPhone} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

