'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, ScrollText, BookOpen, MessageSquare, ClipboardList } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Logo } from '@/components/Logo'

const menuItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Trading Plan',
    href: '/trading-plan',
    icon: ScrollText
  },
  {
    title: 'Journal',
    href: '/journal',
    icon: BookOpen
  },
  {
    title: 'AI Coach',
    href: '/ai-coach',
    icon: MessageSquare
  },
  {
    title: 'Questionnaire',
    href: '/questionnaire',
    icon: ClipboardList
  }
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-border/50 bg-background">
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(
                  "w-full justify-start gap-2 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground",
                  pathname === item.href && "bg-muted text-foreground"
                )}
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

