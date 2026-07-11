import Funding from "./components/sections/Funding";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Subscribe from "./components/sections/Subscribe";

const HomePage = () => {
  return (
    <section className="min-h-full overflow-hidden">
      <Hero />
      <Stats />
      <Services />
      <Funding />
      <Testimonials />
      <Subscribe />
    </section>
  );
};

export default HomePage;
