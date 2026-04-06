"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Scissors, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="medium"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="777 Barbershop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Elite Grooming for the Modern Man"
      description="777 Barbershop provides premium haircuts, precise beard trimming, and classic shaves in a sophisticated, masculine setting."
      testimonials={[
        {
          name: "John D.",
          handle: "@johnd",
          testimonial: "The best shave I've ever had. Truly a 777 experience.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-hairdresser-sitting-barber-chair-waiting-customer_613910-3902.jpg?_wi=1",
          imageAlt: "barbershop interior luxury",
        },
        {
          name: "Mike R.",
          handle: "@miker",
          testimonial: "Precise fades and great atmosphere. Won't go anywhere else.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg?_wi=1",
          imageAlt: "classic men haircut fade",
        },
        {
          name: "Alex S.",
          handle: "@alexs",
          testimonial: "Professional team and elite attention to detail. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-getting-his-hair-washed_23-2148224418.jpg?_wi=1",
          imageAlt: "hot towel shave barber",
        },
        {
          name: "Chris B.",
          handle: "@chrisb",
          testimonial: "The gold standard of barbershops in the city.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/master-hairdresser-prepares-face-shaving-deals-foam_613910-4275.jpg?_wi=1",
          imageAlt: "beard trim precision grooming",
        },
        {
          name: "David W.",
          handle: "@davidw",
          testimonial: "Worth every penny. A proper premium service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-15917.jpg?_wi=1",
          imageAlt: "professional barber portrait",
        },
      ]}
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/professional-hairdresser-sitting-barber-chair-waiting-customer_613910-3902.jpg?_wi=2"
      imageAlt="777 Barbershop luxury interior"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-maledressed-suit-grey-background_613910-1592.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/passionate-plus-size-couple-tender-moments_52683-101577.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3635.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-man-telling-you-smile_23-2148612963.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-men-shaking-hands_23-2149141784.jpg",
          alt: "Client 5",
        },
      ]}
    />
  </div>

  <div id="stats" data-section="stats">
      <AboutMetric
      useInvertedBackground={true}
      title="Precision and Passion"
      metrics={[
        {
          label: "Years Experience",
          value: "15+",
          icon: Award,
        },
        {
          label: "Satisfied Clients",
          value: "10,000+",
          icon: Users,
        },
        {
          label: "Services Provided",
          value: "20+",
          icon: Scissors,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Cut & Style",
          description: "Tailored haircuts designed to enhance your unique features.",
          imageSrc: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg?_wi=2",
        },
        {
          title: "Royal Hot Towel Shave",
          description: "An ultimate traditional shave experience with hot towels and premium oils.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-getting-his-hair-washed_23-2148224418.jpg?_wi=2",
        },
        {
          title: "Beard Sculpting",
          description: "Expert beard grooming, line-ups, and moisturizing treatments.",
          imageSrc: "http://img.b2bpic.net/free-photo/master-hairdresser-prepares-face-shaving-deals-foam_613910-4275.jpg?_wi=2",
        },
      ]}
      title="Our Signature Services"
      description="Indulge in premium grooming services designed for the modern gentleman."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "1",
          name: "Marco",
          role: "Master Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-15917.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Leo",
          role: "Lead Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/aching-young-afro-american-male-barber-wearing-uniform-keeping-hand-head_141793-117590.jpg",
        },
        {
          id: "3",
          name: "David",
          role: "Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-male-fleece-shirt-holds-tablet-pc-grey-background_613910-12280.jpg",
        },
      ]}
      title="Master Barbers"
      description="Meet the artisans behind 777 Barbershop."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="777 Barbershop has elevated my style. The attention to detail and professional environment is unmatched in the city. Truly a premium experience."
      rating={5}
      author="Mark Spencer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-maledressed-suit-grey-background_613910-1592.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/passionate-plus-size-couple-tender-moments_52683-101577.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3635.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-man-telling-you-smile_23-2148612963.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-men-shaking-hands_23-2149141784.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Experience the premium difference. Book your session today."
      buttons={[
        {
          text: "Call to Book",
          href: "tel:5550101",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Team",
              href: "#team",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="777 Barbershop"
      copyrightText="© 2025 777 Barbershop. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
