import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="TrAId Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-primary">TrAId</span>
    </Link>
  )
}

