import { SeoLandingTemplate } from '@/components/seo-landing-template';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Wedding Content Creator Belgium',
  description: 'Wedding content creator in Belgium for elegant, social-ready memories and vendor storytelling.',
  path: '/wedding-content-creator-belgium',
});

export default function Page() {
  return <SeoLandingTemplate title="Wedding Content Creator Belgium" intro="Discreet, premium wedding content coverage designed for modern social sharing." />;
}
