'use client'

import type { LucideIcon } from 'lucide-react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Anchor, Text, XStack, YStack } from '@hanzo/ui'

/**
 * Channel — one place the community lives, as a link you can click anywhere on.
 *
 * The page drew this twice: a big two-up card and a small four-up card. They
 * read as different components and are not. Comparing the two by the set of
 * class names each used scores .26, which is what made them look distinct;
 * normalising the SCALE away — sizes and opacities to a placeholder — takes the
 * same pair to .49. What is left over is emphasis, and `featured` is already a
 * field on the data, so the discriminant did not have to be invented either.
 *
 * The anchor IS the surface. Wrapping a card in a positioning <a> is one element
 * and one hover story too many, and the version that nests them is the version
 * where the hover lights the card while the cursor sits in the gap around it.
 */
export interface Channel {
  icon: LucideIcon
  name: string
  description: string
  href: string
  label: string
  external: boolean
  featured: boolean
}

/** Icons stroke `currentColor`, so a colour set here IS the icon's colour, and
 *  `$group-hover` on the card reaches it without the icon knowing anything. */
const Glyph = ({
  icon: Icon,
  size,
  color,
  hover,
}: {
  icon: LucideIcon
  size: number
  color: string
  hover: string
}) => (
  <Text display="flex" color={color} $group-hover={{ color: hover }}>
    <Icon size={size} />
  </Text>
)

const Tile = ({ size, children }: { size: number; children: React.ReactNode }) => (
  <YStack
    width={size}
    height={size}
    borderRadius={size > 32 ? 12 : 8}
    backgroundColor="$raised"
    alignItems="center"
    justifyContent="center"
    flexShrink={0}
    $group-hover={{ backgroundColor: '$rim' }}
  >
    {children}
  </YStack>
)

export const Channel = ({ icon, name, description, href, label, external, featured }: Channel) => (
  <Anchor
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
    group
    display="flex"
    flexDirection={featured ? 'column' : 'row'}
    alignItems={featured ? 'stretch' : 'flex-start'}
    height="100%"
    gap={featured ? 16 : 12}
    padding={featured ? 24 : 16}
    borderRadius={featured ? 16 : 12}
    backgroundColor="$panel"
    borderWidth={1}
    borderColor="$edge"
    textDecorationLine="none"
    cursor="pointer"
    hoverStyle={{ backgroundColor: '$hover', borderColor: '$dim' }}
  >
    {featured ? (
      <XStack alignItems="center" justifyContent="space-between">
        <Tile size={40}>
          <Glyph icon={icon} size={20} color="$soft" hover="$ink" />
        </Tile>
        <Glyph icon={ExternalLink} size={16} color="$faint" hover="$quiet" />
      </XStack>
    ) : (
      <Tile size={32}>
        <Glyph icon={icon} size={16} color="$quiet" hover="$ink" />
      </Tile>
    )}

    {/* `flex-1` meant `flex: 1 1 0%`, and the half that matters here is the
        SHRINK. A gui stack inherits React Native's default of `flex-shrink: 0`
        where CSS's is 1, so a column that only says "grow" never gives width
        back: measured at 365px of description inside a 247px card, and the page
        got a horizontal scrollbar instead of a second line of text.

        Only in the row. Along a column those same two values are the HEIGHT, and
        a basis of 0 that is not allowed to grow collapses the text to nothing. */}
    <YStack
      gap={featured ? 4 : 2}
      minWidth={0}
      {...(featured ? null : { flexGrow: 1, flexShrink: 1, flexBasis: 0 })}
    >
      <Text fontSize={featured ? 18 : 14} fontWeight={featured ? '600' : '500'} color="$ink">
        {name}
      </Text>
      <Text fontSize={featured ? 14 : 12} lineHeight={featured ? 23 : 16} color="$quiet">
        {description}
      </Text>
    </YStack>

    {featured ? (
      <XStack alignItems="center" gap={6} marginTop="auto">
        <Text fontSize={14} fontWeight="500" color="$soft" $group-hover={{ color: '$ink' }}>
          {label}
        </Text>
        <Glyph icon={ArrowRight} size={14} color="$soft" hover="$ink" />
      </XStack>
    ) : null}
  </Anchor>
)
