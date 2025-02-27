import React from "react";
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Comparison from "../../components/sections/Comparison";
import Testimonials from "../../components/sections/Testimonials";
import CallToAction from "../../components/sections/CallToAction";

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Features />
            <Comparison />
            <Testimonials />
            <CallToAction />
        </main>
    );
};

export default Home;  