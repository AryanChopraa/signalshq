
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Collaboration from "@/components/Collaboration";
import Compliance from "@/components/Compliance";
import ClientStats from "@/components/ClientStats";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Efficiency from "@/components/Efficiency";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ClientStats />
        <Efficiency />

        <Compliance />
        <Collaboration />

        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
