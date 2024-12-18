'use client'

import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/UserButton"

export default function Header() {
  const pathname = usePathname()
  const title = pathname.split('/')[1] || 'Home'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-lg font-semibold capitalize text-foreground">{title}</h2>
          <UserButton />
        </div>
      </div>
    </header>
  )
}

