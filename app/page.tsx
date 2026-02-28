import {
  MessageCircle,
  Github,
  Twitter,
  Users,
  Calendar,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Real-time chat with the community. Get help, share ideas, and connect with the team.",
    href: "https://discord.gg/hanzo",
    label: "Join Discord",
    external: true,
    featured: true,
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Open-source projects, issues, and contributions. Build with us.",
    href: "https://github.com/hanzoai",
    label: "View GitHub",
    external: true,
    featured: true,
  },
  {
    icon: Twitter,
    name: "X / Twitter",
    description: "Updates, announcements, and conversations from the Hanzo team.",
    href: "https://twitter.com/hanzoai",
    label: "Follow @hanzoai",
    external: true,
    featured: false,
  },
  {
    icon: BookOpen,
    name: "Blog",
    description: "Research, product updates, and deep dives from the team.",
    href: "https://blog.hanzo.ai",
    label: "Read the Blog",
    external: true,
    featured: false,
  },
  {
    icon: Calendar,
    name: "Events",
    description: "Meetups, webinars, and hackathons. Join us in person or online.",
    href: "https://hanzo.ai/events",
    label: "See Events",
    external: false,
    featured: false,
  },
  {
    icon: Users,
    name: "Ambassador Program",
    description: "Represent Hanzo AI in your community. Apply to become an ambassador.",
    href: "https://hanzo.ai/contact",
    label: "Apply Now",
    external: false,
    featured: false,
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="https://hanzo.ai" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity">
            <span className="font-semibold text-base tracking-tight">hanzo</span>
            <span className="text-muted-foreground text-sm">/ community</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="https://hanzo.ai" className="hover:text-foreground transition-colors">hanzo.ai</a>
            <a href="https://hanzo.help" className="hover:text-foreground transition-colors">Help</a>
            <a
              href="https://discord.gg/hanzo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-foreground hover:bg-accent transition-all text-sm font-medium"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Join Discord
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Hanzo Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with developers, researchers, and AI builders worldwide.
              Get help, share projects, and shape the future of AI together.
            </p>
          </div>

          {/* Featured channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {channels.filter(c => c.featured).map((channel) => {
              const Icon = channel.icon;
              const content = (
                <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-border hover:border-white/20 hover:bg-neutral-800/50 transition-all h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                      <Icon className="h-5 w-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground mb-1">{channel.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{channel.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {channel.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            })}
          </div>

          {/* Other channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {channels.filter(c => !c.featured).map((channel) => {
              const Icon = channel.icon;
              const content = (
                <div className="group flex items-start gap-3 p-4 rounded-xl bg-neutral-900/30 border border-border/50 hover:border-border hover:bg-neutral-800/40 transition-all h-full">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/60 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700/60 transition-colors mt-0.5">
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground mb-0.5">{channel.name}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{channel.description}</div>
                  </div>
                </div>
              );
              if (channel.external) {
                return (
                  <a key={channel.name} href={channel.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                );
              }
              return (
                <a key={channel.name} href={channel.href} className="block">
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2025 Hanzo AI, Inc. Techstars &apos;17.</span>
          <div className="flex items-center gap-4">
            <a href="https://hanzo.ai/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://hanzo.ai/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://hanzo.ai/contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
