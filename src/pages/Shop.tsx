
import React from "react";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";

const Shop: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-serif font-bold mb-4">Our Collection</h1>
              <p className="text-lg text-muted-foreground">
                Discover our latest fashion products designed with quality, style, and comfort in mind.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <ProductGrid />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;
