import Hero from "@/components/home/Hero";
import ExperienceCategories from "@/components/home/ExperienceCategories";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import ParallaxJourney from "@/components/home/ParallaxJourney";
import TravelServices from "@/components/home/TravelServices";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { googleTestimonials } from "@/data/testimonials";
import BlogPreview from "@/components/home/BlogPreview";

export const metadata: Metadata = {
  title: "Zazu Adventures | Victoria Falls & Southern Africa Travel",
  description:
    "Discover Victoria Falls activities, safaris, transfers and multi-day journeys across Zimbabwe and Southern Africa with Zazu Adventures.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceCategories />
      <ParallaxJourney />
      <FeaturedExperiences />
      <TravelServices />
      <AboutPreview />
      <TestimonialsSection items={googleTestimonials} />
      <BlogPreview />
    </>
  );
}
import type { Metadata } from "next";
