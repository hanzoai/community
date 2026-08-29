'use client'

import { BookOpen, Calendar, MessageCircle, Users } from 'lucide-react'
import { Github, Twitter } from '@hanzo/ui/brands'
import { Anchor, H1, Text, XStack, YStack } from '@hanzo/ui'
import { Grid } from '@hanzo/ui/grid'
import { Bar, Link } from './bar'
import { Channel } from './channel'

const MEASURE = 1024

const channels: Channel[] = [
  {
    icon: MessageCircle,
    name: 'Discord',
    description: 'Real-time chat with the community. Get help, share ideas, and connect with the team.',
    href: 'https://discord.gg/CJCyAsm9Vr',
    label: 'Join Discord',
    external: true,
    featured: true,
  },
  {
    icon: Github,
    name: 'GitHub',
    description: 'Open-source projects, issues, and contributions. Build with us.',
    href: 'https://github.com/hanzoai',
    label: 'View GitHub',
    external: true,
    featured: true,
  },
  {
    icon: Twitter,
    name: 'X / Twitter',
    description: 'Updates, announcements, and conversations from the Hanzo team.',
    href: 'https://twitter.com/hanzoai',
    label: 'Follow @hanzoai',
    external: true,
    featured: false,
  },
  {
    icon: BookOpen,
    name: 'Blog',
    description: 'Research, product updates, and deep dives from the team.',
    href: 'https://blog.hanzo.ai',
    label: 'Read the Blog',
    external: true,
    featured: false,
  },
  {
    icon: Calendar,
    name: 'Events',
    description: 'Meetups, webinars, and hackathons. Join us in person or online.',
    href: 'https://hanzo.ai/events',
    label: 'See Events',
    external: false,
    featured: false,
  },
  {
    icon: Users,
    name: 'Ambassador Program',
    description: 'Represent Hanzo AI in your community. Apply to become an ambassador.',
    href: 'https://hanzo.ai/contact',
    label: 'Apply Now',
    external: false,
    featured: false,
  },
]

const featured = channels.filter((c) => c.featured)
const rest = channels.filter((c) => !c.featured)

export default function CommunityPage() {
  return (
    <YStack minHeight="100vh">
      <Bar top paddingVertical={16}>
        <Anchor
          href="https://hanzo.ai"
          display="flex"
          alignItems="baseline"
          gap={8}
          color="$ink"
          textDecorationLine="none"
          cursor="pointer"
          hoverStyle={{ opacity: 0.8 }}
        >
          <Text fontSize={16} fontWeight="600" letterSpacing={-0.4} color="$ink">
            hanzo
          </Text>
          <Text fontSize={14} color="$quiet">
            / community
          </Text>
        </Anchor>

        <XStack alignItems="center" gap={16}>
          <Link href="https://hanzo.ai">hanzo.ai</Link>
          <Link href="https://hanzo.help">Help</Link>
          <Link
            href="https://discord.gg/CJCyAsm9Vr"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap={6}
            paddingHorizontal={12}
            paddingVertical={6}
            borderRadius={9999}
            borderWidth={1}
            borderColor="$edge"
            color="$ink"
            fontWeight="500"
            hoverStyle={{ backgroundColor: '$accentBackground' }}
          >
            <MessageCircle size={14} />
            Join Discord
          </Link>
        </XStack>
      </Bar>

      <YStack flexGrow={1} paddingHorizontal={24} paddingTop={80} paddingBottom={64} alignItems="center">
        <YStack width="100%" maxWidth={MEASURE} gap={64}>
          <YStack alignItems="center" gap={16}>
            <H1
              fontSize={36}
              $sm={{ fontSize: 48 }}
              fontWeight="700"
              letterSpacing={-1}
              textAlign="center"
              color="$ink"
            >
              Hanzo Community
            </H1>
            <Text fontSize={18} lineHeight={29} maxWidth={672} textAlign="center" color="$quiet">
              Connect with developers, researchers, and AI builders worldwide. Get help, share
              projects, and shape the future of AI together.
            </Text>
          </YStack>

          <YStack gap={24}>
            <Grid columns={{ min: 280, max: 2 }} gap={16}>
              {featured.map((c) => (
                <Channel key={c.name} {...c} />
              ))}
            </Grid>

            <Grid columns={{ min: 240, max: 4 }} gap={12}>
              {rest.map((c) => (
                <Channel key={c.name} {...c} />
              ))}
            </Grid>
          </YStack>
        </YStack>
      </YStack>

      <Bar paddingVertical={24} stack>
        <Text fontSize={14} color="$quiet">
          © 2025 Hanzo AI, Inc. Techstars &apos;17.
        </Text>
        <XStack alignItems="center" gap={16}>
          <Link href="https://hanzo.ai/privacy">Privacy</Link>
          <Link href="https://hanzo.ai/terms">Terms</Link>
          <Link href="https://hanzo.ai/contact">Contact</Link>
        </XStack>
      </Bar>
    </YStack>
  )
}
