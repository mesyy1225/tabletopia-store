
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group product-card h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="product-image-container relative overflow-hidden rounded-lg h-60 md:h-72">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image h-full w-full object-cover"
            loading="lazy"
          />
          
          {/* Quick action buttons */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10 bg-white/90 hover:bg-white text-primary"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary" 
              className="rounded-full h-10 w-10 bg-white/90 hover:bg-white text-primary"
              aria-label="View details"
              asChild
            >
              <div>
                <Eye className="h-4 w-4" />
              </div>
            </Button>
          </div>
          
          {/* Category tag */}
          {product.categories[0] && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-primary">
              {product.categories[0]}
            </div>
          )}
        </div>
        
        <div className="pt-4 pb-1 px-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-lg text-primary/90">{product.name}</h3>
            <span className="text-lg font-semibold text-primary">${product.price}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
            <span className="mx-1 text-muted-foreground text-sm">•</span>
            <span className="text-sm font-medium text-primary/70">{product.material}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
