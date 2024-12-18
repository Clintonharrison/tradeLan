import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, X } from 'lucide-react'

interface CongratulationsPopupProps {
  message: string;
  onClose: () => void;
}

export function CongratulationsPopup({ message, onClose }: CongratulationsPopupProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <Card className="w-96 animate-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-bold">Congratulations!</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-400" />
          </div>
          <p className="text-center mb-4">{message}</p>
          <Button className="w-full" onClick={onClose}>
            Stay Disciplined!
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

