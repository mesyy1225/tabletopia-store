
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" ref={ref}>
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1617968763460-64828d926d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="Luxury wooden table"
          className="object-cover w-full h-full animate-fadeIn"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="max-w-2xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block mb-3 text-sm font-semibold tracking-wider uppercase bg-primary/30 backdrop-blur-sm px-3 py-1 rounded-full text-primary-foreground/90"
          >
            Craftsmanship Reimagined
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6"
          >
            Timeless Tables, <br />
            Modern Craft
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl"
          >
            Each WoodCraft table is a masterpiece, handcrafted with premium materials and meticulous attention to detail.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="group">
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/80 hover:bg-white/10" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-floatUp">
        <div className="text-white/80 text-sm font-medium mb-2">Scroll</div>
        <div className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
