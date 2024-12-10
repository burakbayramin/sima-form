import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface GeneralInfoProps {
  formData: {
    memberNo: string
    name: string
    tcKimlikNo: string
    motherName: string
    fatherName: string
    birthPlace: string
    birthDate: string
    gender: string
    maritalStatus: string
    registeredPlace: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (name: string, value: string) => void
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ formData, handleChange, handleSelectChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-2 pt-4">
        Genel Bilgiler
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label className="mb-1">Üye Sıra No</Label>
          <Input 
            type="text" 
            name="memberNo" 
            value={formData.memberNo} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Adı ve Soyadı</Label>
          <Input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">T.C. Kimlik No</Label>
          <Input 
            type="text" 
            name="tcKimlikNo" 
            value={formData.tcKimlikNo} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Ana Adı</Label>
          <Input 
            type="text" 
            name="motherName" 
            value={formData.motherName} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Baba Adı</Label>
          <Input 
            type="text" 
            name="fatherName" 
            value={formData.fatherName} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Doğum Yeri</Label>
          <Input 
            type="text" 
            name="birthPlace" 
            value={formData.birthPlace} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Doğum Tarihi</Label>
          <Input 
            type="date" 
            name="birthDate" 
            value={formData.birthDate} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Label className="mb-1">Cinsiyeti</Label>
          <Select 
            name="gender"
            value={formData.gender}
            onValueChange={(value) => handleSelectChange('gender', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="erkek">Erkek</SelectItem>
              <SelectItem value="kadin">Kadın</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-1">Medeni Hali</Label>
          <Select 
            name="maritalStatus"
            value={formData.maritalStatus}
            onValueChange={(value) => handleSelectChange('maritalStatus', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="evli">Evli</SelectItem>
              <SelectItem value="bekar">Bekar</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-3">
          <Label className="mb-1">Nüfusa Kayıtlı Olduğu Yer</Label>
          <Input 
            type="text" 
            name="registeredPlace" 
            value={formData.registeredPlace} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo

