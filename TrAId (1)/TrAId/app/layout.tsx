import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'
import { AIChatbot } from '@/components/AIChatbot'
import Sidebar from './components/Sidebar'
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ThemeProvider"
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TrAId - AI-Powered Trading Mindset Coach',
  description: 'Experience the power of TrAId – where trading meets AI assistance. Get consistent results with your 24/7 AI trading mindset partner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ErrorBoundary>
            <Navigation />
            <SidebarProvider>
              <div className="flex min-h-screen pt-16">
                <Sidebar />
                <div className="flex-1">
                  <main className="flex-1 overflow-auto">
                    {children}
                  </main>
                </div>
              </div>
              <AIChatbot />
            </SidebarProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

