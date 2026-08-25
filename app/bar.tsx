'use client'

import type { ComponentProps, ReactNode } from 'react'
import { Anchor, XStack } from '@hanzo/ui'

/**
 * Bar — the rule-lined row at the top and the bottom of the page.
 *
 * Header and footer scored .42 against each other on class vocabulary, the
 * highest pair on the page after the two cards, and every token in the overlap
 * spells the same thing: a full-bleed strip with a hairline on one edge, and
 * inside it a centred measure holding its ends apart. The strip has to be the
 * OUTER box — put the measure's width on it instead and the hairline stops short
 * of the window.
 */
export const Bar = ({
  top,
  paddingVertical,
  stack,
  children,
}: {
  /** Which edge carries the hairline — and so which end of the page this is. */
  top?: boolean
  paddingVertical: number
  /** Stack the ends until there is room to sit them side by side. */
  stack?: boolean
  children: ReactNode
}) => (
  <XStack
    render={top ? 'header' : 'footer'}
    width="100%"
    paddingHorizontal={24}
    paddingVertical={paddingVertical}
    justifyContent="center"
    borderColor="$edge"
    {...(top ? { borderBottomWidth: 1 } : { borderTopWidth: 1 })}
  >
    <XStack
      width="100%"
      maxWidth={1024}
      gap={16}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={stack ? 'column' : 'row'}
      // The ends wrap onto a second line rather than pushing a scrollbar onto
      // the page: at 390px the wordmark and the nav want 357px of a 342px
      // measure, and a bar that cannot wrap makes the whole document scroll
      // sideways. Above that there is room and nothing wraps.
      flexWrap="wrap"
      $sm={{ flexDirection: 'row' }}
    >
      {children}
    </XStack>
  </XStack>
)

/** The quiet link that lights up. Written five times across the two bars. */
export const Link = (props: ComponentProps<typeof Anchor>) => (
  <Anchor
    fontSize={14}
    color="$quiet"
    textDecorationLine="none"
    cursor="pointer"
    hoverStyle={{ color: '$ink' }}
    {...props}
  />
)
