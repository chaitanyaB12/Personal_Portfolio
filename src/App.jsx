import { useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Fixed background */}
      <div className="fixed -z-10 inset-0 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

        {/* <div className="relative min-h-screen w-screen overflow-x-hidden bg-black"> */}
      {/* ✅ Navbar placed outside main layout to avoid scroll bugs */}
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
