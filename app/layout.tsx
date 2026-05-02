import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Cost Alerter — Get alerts when API costs spike unexpectedly',
  description: 'Monitor API usage patterns and get instant alerts when costs deviate from normal. Supports Stripe, OpenAI, AWS, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d5f9b424-5899-462f-8e5b-371933dcef87"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
