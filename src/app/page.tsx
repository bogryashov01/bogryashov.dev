import CaseStudyGrid from '@/components/sections/CaseStudyGrid/CaseStudyGrid';
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA';
import Hero from '@/components/sections/Hero/Hero';
import ServiceCards from '@/components/sections/ServiceCards/ServiceCards';
import TrustBlock from '@/components/sections/TrustBlock/TrustBlock';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe/WhyWorkWithMe';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBlock />
      <CaseStudyGrid />
      <ServiceCards />
      <WhyWorkWithMe />
      <ContactCTA />
    </main>
  );
}
