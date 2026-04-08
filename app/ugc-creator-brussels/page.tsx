import { SeoLandingTemplate } from '@/components/seo-landing-template';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'UGC Creator Brussels',
  description: 'Brussels-based UGC creator for premium campaigns and social-native brand storytelling.',
  path: '/ugc-creator-brussels',
});

export default function Page() {
  return <SeoLandingTemplate title="UGC Creator Brussels" intro="Content production support for brands and agencies looking for premium UGC in Brussels." />;
}
