import { SeoLandingTemplate } from '@/components/seo-landing-template';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Multilingual UGC Creator Belgium',
  description: 'Multilingual UGC creator in Belgium working in French, Dutch, and English.',
  path: '/multilingual-ugc-creator-belgium',
});

export default function Page() {
  return <SeoLandingTemplate title="Multilingual UGC Creator Belgium" intro="French, Dutch, and English UGC creation for brands that need localized social storytelling." />;
}
