import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../sections/HeroSection';
import { TrustSection } from '../sections/TrustSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { CountriesSection } from '../sections/CountriesSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { TeamSection } from '../sections/TeamSection';
import { FAQSection } from '../sections/FAQSection';
import { ContactSection } from '../sections/ContactSection';

interface HomePageProps {
  onOpenAssessment: () => void;
  onSelectCountry: (countryName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAssessment,
  onSelectCountry,
}) => {
  return (
    <>
      <SEOHead
        title="AuraWise International | Premier Overseas Education & Global Migration Advisory"
        description="India's most trusted overseas education & migration consultancy since 2009. Expert guidance for Student Visas, PR, Work Permits across USA, UK, Canada, Australia & Europe. 98% Visa Success Rate."
        keywords="AuraWise International, overseas education Ahmedabad, study abroad consultant, student visa, permanent residency Canada Australia, Express Entry, MARA registered agent, OISC certified, university admissions abroad"
        canonicalPath="/"
        ogType="website"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      <HeroSection onOpenAssessment={onOpenAssessment} onSelectCountry={onSelectCountry} />
      <TrustSection />
      <AboutSection onOpenAssessment={onOpenAssessment} />
      <ServicesSection onOpenAssessment={onOpenAssessment} />
      <CountriesSection onSelectCountry={onSelectCountry} />
      <WhyChooseUsSection />
      <ProcessSection onOpenAssessment={onOpenAssessment} />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};
