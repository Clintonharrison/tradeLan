'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"
import { UserButton } from "@/components/UserButton"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-full">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/dashboard">Get started</Link>
          </Button>
          <UserButton />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

