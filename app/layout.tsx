import type { Metadata } from 'next'
import { Hanzo } from '@hanzo/ui'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanzo.community'),
  title: {
    default: 'Hanzo Community',
    template: '%s — Hanzo Community',
  },
  description:
    'Join the Hanzo AI community. Connect with developers, researchers, and builders on Discord, forums, and events.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Hanzo theme="dark">{children}</Hanzo>
      </body>
    </html>
  )
}
