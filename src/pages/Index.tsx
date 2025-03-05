
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* Craftsmanship Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary/70">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  Exceptional Craftsmanship in Every Detail
                </h2>
                <p className="text-muted-foreground">
                  At WoodCraft, we believe that great design comes from the perfect balance of beauty and function. Our master craftspeople select the finest materials and employ traditional woodworking techniques alongside modern innovations to create tables that will stand the test of time.
                </p>
                <p className="text-muted-foreground">
                  Each piece passes through the hands of skilled artisans who carefully shape, join, and finish the wood to bring out its natural character and beauty. The result is furniture that's not just a functional object, but a work of art that tells a story.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h3 className="font-medium text-xl mb-2">Sustainable Materials</h3>
                    <p className="text-sm text-muted-foreground">We source our woods from responsible suppliers committed to sustainable forestry practices.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Handcrafted Excellence</h3>
                    <p className="text-sm text-muted-foreground">Every table is meticulously crafted by our skilled artisans with years of experience.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1521224911436-1e61a934c39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Craftsman working on a wooden table" 
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-accent/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary/70 mb-3">
                Customer Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Emily Johnson",
                  role: "Interior Designer",
                  quote: "The craftsmanship of my WoodCraft dining table is exceptional. The attention to detail and the natural beauty of the wood makes it the centerpiece of my dining room.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Michael Chen",
                  role: "Restaurant Owner",
                  quote: "We furnished our entire restaurant with WoodCraft tables. Three years later, they still look as beautiful as the day they arrived, despite heavy daily use.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Sofia Rodriguez",
                  role: "Home Owner",
                  quote: "The Artisan Side Table I purchased is truly a work of art. The hand-carved details are extraordinary, and it's become a conversation piece in my living room.",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-soft"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Subscribe to receive updates on new collections, special offers, and exclusive events.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
