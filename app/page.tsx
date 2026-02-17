import AstronomicalEvents from "@/components/astronomicalEvent/AstronomicalEvent";
import Domains from "@/components/domains/Domains";
import FeaturedConcepts from "@/components/featuredConcepts/FeaturedConcepts";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import StartHere from "@/components/starthere/StartHere";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Domains />
      <FeaturedConcepts />
      <StartHere />
      <AstronomicalEvents />
      <NewsletterForm />
      <Footer />
    </div>
  )
}
