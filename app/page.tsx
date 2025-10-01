import Hero from "@/components/hero"
import HomeAbout from "@/components/home-about"
import TechStacks from "@/components/tech-stacks"
import HomePortfolio from "@/components/home-portfolio"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import Faqs from "@/components/Faqs"
import { HomeFaqs } from "@/data/FAQsData"
import Script from "next/script"
import { getFaqData, getWebpageData } from "@/lib/structured-data"

export default function Home() {

  return (
    <div>
        <script
        id="UBconcept-FAQ-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@graph": [
              getWebpageData(
                "https://ubconcept.vercel.app/",
                "UBConcept - Transform Your Idea into Product",
                "UBConcept helps transform innovative ideas into market-ready products with our comprehensive approach to product development."
              ),
              getFaqData(HomeFaqs)
            ]
          })
        }}
      />
      <Hero />
      <HomeAbout />
      <TechStacks />
      <HomePortfolio />
      <Testimonials />
       <Faqs 
        title="FAQs"
        description="Here’s a set of FAQs to help you discover more about UBConcept"
        faqs={HomeFaqs}
      />
      <BlogSection />
    </div>
  )
}
