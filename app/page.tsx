import Hero from "@/components/hero"
import HomeAbout from "@/components/home-about"
import TechStacks from "@/components/tech-stacks"
import HomePortfolio from "@/components/home-portfolio"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <TechStacks />
      <HomePortfolio />
      <Testimonials />
      <BlogSection />
    </div>
  )
}
