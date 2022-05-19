
import Link from "next/link"
import Analytics from "./components/Analytics"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  )
}
