import { PageHero } from '@/components/page-hero';
import { buildMetadata } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy placeholder for Denise Fabiano website.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="A full privacy policy should be added before launch." />
    </>
  );
}
