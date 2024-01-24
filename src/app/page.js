import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Navbar/>
      <div className="flex mt-24 min-h-screen flex-col mx-auto px-4 py-12 container">
        <div className="shadow-2xl rounded-3xl bg-gradient-to-r from-darkblue to-60% to-blue p-10 dark:from-background dark:to-90% dark:to-blue">
      <HeroSection/>
        </div>
      </div>
    </main>
  );
}
