import { SeoLandingTemplate } from '@/components/seo-landing-template';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'UGC Creator Belgium',
  description: 'UGC creator in Belgium for premium lifestyle, beauty, hospitality and event brands.',
  path: '/ugc-creator-belgium',
});

export default function Page() {
  return <SeoLandingTemplate title="UGC Creator Belgium" intro="Premium UGC creation for brands looking for native, aesthetic and conversion-focused content in Belgium." />;
}
