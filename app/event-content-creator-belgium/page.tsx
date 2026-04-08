import { SeoLandingTemplate } from '@/components/seo-landing-template';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Event Content Creator Belgium',
  description: 'Event content creator in Belgium for premium brand events, venues, and hospitality experiences.',
  path: '/event-content-creator-belgium',
});

export default function Page() {
  return <SeoLandingTemplate title="Event Content Creator Belgium" intro="On-site event capture and fast social-ready delivery for premium events across Belgium." />;
}
