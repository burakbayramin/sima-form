import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ProfessionInfoProps {
  formData: {
    workInstitution: string;
    title: string;
    workCity: string;
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProfessionInfo: React.FC<ProfessionInfoProps> = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-2">
        Meslek ve Kurum Bilgileri
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label className="mb-1">Çalıştığı Kurum</Label>
          <Input 
            type="text" 
            name="workInstitution" 
            value={formData.workInstitution} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Unvanı</Label>
          <Input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Görev Yeri (Şehir)</Label>
          <Input 
            type="text" 
            name="workCity" 
            value={formData.workCity} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  )
}

export default ProfessionInfo

