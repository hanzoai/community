import '@hanzo/ui/styles.css'
import type { Metadata } from 'next'
import { Hanzo } from '@hanzo/ui'
import { Analytics } from './analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanzo.community'),
  title: {
    default: 'Hanzo Community',
    template: '%s — Hanzo Community',
  },
  description:
    'Join the Hanzo AI community. Connect with developers, researchers, and builders on Discord, forums, and events.',
}

/** `Analytics` sits inside `Hanzo` so the consent banner is themed. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Hanzo theme="dark">
          <Analytics>{children}</Analytics>
        </Hanzo>
      </body>
    </html>
  )
}
