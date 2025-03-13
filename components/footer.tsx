import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        © 2025 ProjectHub. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
          Terms
        </Link>
        <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
          Privacy
        </Link>
        <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
          Contact
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer