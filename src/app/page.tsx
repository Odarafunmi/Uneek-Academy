import {
  LandingNav,
  Hero,
  AboutStats,
  CoursesSection,
  MentorsSection,
  StatementBand,
  HowItWorks,
  TestimonialSection,
  Mosaic,
  Newsletter,
  Footer,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <main>
      <LandingNav />
      <Hero />
      <AboutStats />
      <CoursesSection />
      <MentorsSection />
      <StatementBand />
      <HowItWorks />
      <TestimonialSection />
      <Mosaic />
      <Newsletter />
      <Footer />
    </main>
  );
}
