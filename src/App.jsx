import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FieldsGrid from "./components/FieldsGrid";
import Roadmap from "./components/Roadmap";
import SoftwareCards from "./components/SoftwareCards";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <FieldsGrid />
        <Roadmap />
        <SoftwareCards />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
