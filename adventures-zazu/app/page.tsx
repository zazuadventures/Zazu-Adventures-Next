import Hero from "@/components/home/Hero";
import ExperienceCategories from "@/components/home/ExperienceCategories";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import TravelServices from "@/components/home/TravelServices";
import WhyZazu from "@/components/home/WhyZazu";
import AboutPreview from "@/components/home/AboutPreview";
import BlogPreview from "@/components/blog/BlogPreview";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceCategories />
      <FeaturedExperiences />
      <TravelServices />
      <WhyZazu />
      <AboutPreview />
      <BlogPreview />
      <HomeCTA />
    </>
  );
}
