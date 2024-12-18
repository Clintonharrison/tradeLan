import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'

export function FileUpload({ onFileUpload }: { onFileUpload: (file: File) => void }) {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileUpload(file)
    }
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="trading-plan-upload">Upload your trading plan</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="trading-plan-upload"
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button asChild variant="outline">
          <label htmlFor="trading-plan-upload" className="cursor-pointer">
            <Upload className="mr-2 h-4 w-4" />
            Choose File
          </label>
        </Button>
        {fileName && <span className="text-sm text-gray-500">{fileName}</span>}
      </div>
    </div>
  )
}

