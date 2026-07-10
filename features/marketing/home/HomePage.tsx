import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";

const HomePage = () => {
    return (
        <section className="min-h-full">
            <Hero />
            <Stats />
            <Services />
        </section>
    )
}

export default HomePage;