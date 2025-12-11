import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/about"; // Importing your new component

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-black pb-6 pt-6 px-8">
        <Navbar />
      </div>
      <main className="flex-grow pt-20 px-4">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}