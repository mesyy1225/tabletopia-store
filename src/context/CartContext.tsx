
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "@/lib/data";
import { toast } from "sonner";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: number } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: number; quantity: number } }
  | { type: "CLEAR_CART" };

interface CartContextProps {
  state: CartState;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (totals, item) => {
      return {
        totalItems: totals.totalItems + item.quantity,
        totalPrice: totals.totalPrice + item.product.price * item.quantity,
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...state.items, { product, quantity }];
      }

      const { totalItems, totalPrice } = calculateCartTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(item => item.product.id !== action.payload.productId);
      const { totalItems, totalPrice } = calculateCartTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { productId } });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const { totalItems, totalPrice } = calculateCartTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};

const CART_STORAGE_KEY = "woodcraft_cart";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const initialState: CartState = (() => {
    if (typeof window === "undefined") {
      return { items: [], totalItems: 0, totalPrice: 0 };
    }
    
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart
        ? JSON.parse(storedCart)
        : { items: [], totalItems: 0, totalPrice: 0 };
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return { items: [], totalItems: 0, totalPrice: 0 };
    }
  })();

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
