import { Nav } from "./components";
import React, { useEffect, useRef, useState } from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const onWindScroll = () => {
          const element = ref.current;
          if (element) {
              const { top } = element.getBoundingClientRect();
              const isVisible = top < window.innerHeight;
              setIsVisible(isVisible);
          }
      };

      window.addEventListener("scroll", onWindScroll);
      return () => {
          window.removeEventListener("scroll", onWindScroll);
      };
  }, []);

  const classes = `transition-opacity duration-1000 delay-150
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>
      
      <RevealOnScroll>
        <section className='padding'>
          <PopularProducts />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className='padding'>
          <SuperQuality />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className='padding-x'>
          <Services />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className='padding'>
          <SpecialOffer />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className='bg-pale-blue padding'>
          <CustomerReviews />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
      </RevealOnScroll>
    </main>
  );
};

export default App;  