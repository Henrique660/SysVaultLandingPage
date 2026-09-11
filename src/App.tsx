import { Grain } from "./components/Grain/Grain";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { Products } from "./components/Products/Products";
import { Quote } from "./components/Quote/Quote";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Footer } from "./components/Footer/Footer";
import { useReveal } from "./hooks/useReveal";
import { BarbeariaPage } from "./pages/BarbeariaPage";

import "./styles/globals.css";
import "./styles/utils.css";

export default function App() {
  useReveal();

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/barbearia") {
    return <BarbeariaPage />;
  }

  return (
    <>
      <Grain />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Products />
        <Quote />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
