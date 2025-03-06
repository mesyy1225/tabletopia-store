export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  categories: string[];
  material: string;
  dimensions: {
    width: number;
    length: number;
    height: number;
  };
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegance Dining Table",
    shortDescription: "Minimalist solid oak dining table",
    description: "Our best-selling Elegance Dining Table is crafted from premium solid oak with a natural finish that highlights the wood's beautiful grain patterns. The table's clean lines and minimalist design make it a versatile centerpiece for any dining room. The table comfortably seats 6 people and is built to last for generations.",
    price: 135000,
    images: [
      "https://i.ibb.co/gMcKWyFk/elegance-dining-1.jpg",
      "https://i.ibb.co/Mkpp82D7/elegance-dining-2.jpg",
      "https://i.ibb.co/DnMk7x5/elegance-dining-3.jpg",
      "https://i.ibb.co/p6SVT1Wj/elegance-dining-4.jpg",
      "https://i.ibb.co/N27prg9D/rustic-dining-1.jpg"
    ],
    categories: ["Dining", "Oak", "Modern"],
    material: "Solid Oak",
    dimensions: {
      width: 90,
      length: 180,
      height: 75
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: 1,
        userName: "Sarah Johnson",
        rating: 5,
        comment: "Absolutely love this table! The quality is exceptional and it looks stunning in our dining room.",
        date: "2023-08-15"
      },
      {
        id: 2,
        userId: 2,
        userName: "Michael Chen",
        rating: 4,
        comment: "Beautiful table, exactly as described. Took off one star because delivery took longer than expected.",
        date: "2023-07-22"
      }
    ]
  },
  {
    id: 2,
    name: "Nordic Coffee Table",
    shortDescription: "Scandinavian-inspired walnut coffee table",
    description: "The Nordic Coffee Table combines Scandinavian simplicity with impeccable craftsmanship. Made from solid walnut with a warm, rich finish, this coffee table features subtle rounded edges and tapered legs for a light, floating appearance. The spacious tabletop provides ample space for books, décor, and beverages, while the clean design ensures it will complement any living space.",
    price: 74900,
    images: [
      "https://i.ibb.co/GfhnC8Gy/coffee-table-1.jpg",
      "https://i.ibb.co/LdHJRGZY/coffee-table-2.jpg",
      "https://i.ibb.co/HT446tJn/coffee-table-3.jpg",
      "https://i.ibb.co/MWYyYrn/coffee-table-4.jpg",
      "https://i.ibb.co/yFbZFP3C/coffee-table-5.jpg"
    ],
    categories: ["Coffee", "Walnut", "Scandinavian"],
    material: "Solid Walnut",
    dimensions: {
      width: 60,
      length: 120,
      height: 45
    },
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: [
      {
        id: 3,
        userId: 3,
        userName: "Emma Wilson",
        rating: 5,
        comment: "This coffee table exceeded my expectations! The walnut is gorgeous and the quality is outstanding.",
        date: "2023-09-02"
      }
    ]
  },
  {
    id: 3,
    name: "Executive Desk",
    shortDescription: "Sophisticated mahogany executive desk",
    description: "The Executive Desk is the ultimate statement piece for any home office or professional workspace. Crafted from premium mahogany with a deep, lustrous finish, this desk features two spacious drawers with soft-close mechanisms and brass hardware. The generous work surface provides ample space for productivity, while the elegant profile ensures this desk will become a treasured piece in your workspace.",
    price: 189900,
    images: [
      "https://i.ibb.co/997VBVdX/desk-1.jpg",
      "https://i.ibb.co/LXkYMk1S/desk-2.jpg",
      "https://i.ibb.co/GvWKd096/desk-3.jpg",
      "https://i.ibb.co/hFkLF0pG/desk-4.jpg"
    ],
    categories: ["Office", "Mahogany", "Executive"],
    material: "Mahogany",
    dimensions: {
      width: 80,
      length: 160,
      height: 75
    },
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: [
      {
        id: 4,
        userId: 4,
        userName: "David Brown",
        rating: 5,
        comment: "A truly exceptional desk that transforms my home office. The quality and craftsmanship are outstanding.",
        date: "2023-06-10"
      },
      {
        id: 5,
        userId: 5,
        userName: "Jennifer Lee",
        rating: 5,
        comment: "Worth every penny. This desk is both beautiful and functional - I couldn't be happier with my purchase.",
        date: "2023-05-18"
      }
    ]
  },
  {
    id: 4,
    name: "Industrial Console Table",
    shortDescription: "Rustic iron and reclaimed wood console",
    description: "The Industrial Console Table combines rugged iron legs with a top made from reclaimed pine, creating a perfect blend of industrial style and sustainable design. Each table is unique due to the natural variations in the reclaimed wood, showing distinctive markings and grain patterns. The slender profile makes it ideal for entryways, behind sofas, or against walls in any room where you want to add character and functionality.",
    price: 59900,
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    categories: ["Console", "Industrial", "Reclaimed"],
    material: "Iron and Reclaimed Pine",
    dimensions: {
      width: 40,
      length: 120,
      height: 80
    },
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: [
      {
        id: 6,
        userId: 6,
        userName: "Robert Thompson",
        rating: 5,
        comment: "This console table is exactly what I was looking for to complete my entryway. Solid construction and great looks!",
        date: "2023-08-20"
      },
      {
        id: 7,
        userId: 7,
        userName: "Michelle Garcia",
        rating: 4,
        comment: "Love the rustic look and sturdiness of this table. The wood has some more variation than shown in the photos, but still beautiful.",
        date: "2023-07-15"
      }
    ]
  },
  {
    id: 5,
    name: "Modern Meeting Table",
    shortDescription: "Sleek glass and steel conference table",
    description: "The Modern Meeting Table is designed for contemporary office spaces and meeting rooms. The tempered glass top is supported by a precision-engineered steel base, creating a sophisticated floating effect. This table comfortably seats 8 people and includes integrated cable management for tech-ready meetings. The clean lines and transparent surface maximize the sense of space in any room.",
    price: 249900,
    images: [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    categories: ["Conference", "Glass", "Modern", "Office"],
    material: "Tempered Glass and Steel",
    dimensions: {
      width: 120,
      length: 240,
      height: 75
    },
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: [
      {
        id: 8,
        userId: 8,
        userName: "Alex Rodriguez",
        rating: 5,
        comment: "Transformed our meeting room. Professional, stylish, and extremely well-made.",
        date: "2023-04-30"
      }
    ]
  },
  {
    id: 6,
    name: "Artisan Side Table",
    shortDescription: "Hand-carved mango wood side table",
    description: "Each Artisan Side Table is a unique piece of functional art, hand-carved by skilled craftspeople from sustainable mango wood. The intricate geometric patterns are inspired by traditional designs but with a contemporary twist. The compact size makes it perfect as a bedside table or accent piece in any room. By purchasing this table, you're supporting traditional craftsmanship and sustainable forestry practices.",
    price: 39900,
    images: [
      "https://images.unsplash.com/photo-1631455853929-ba06397f9a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80",
      "https://images.unsplash.com/photo-1601590384651-c3aca464b059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    categories: ["Side Table", "Artisan", "Mango Wood"],
    material: "Mango Wood",
    dimensions: {
      width: 45,
      length: 45,
      height: 55
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: [
      {
        id: 9,
        userId: 9,
        userName: "Sophia Martinez",
        rating: 5,
        comment: "This side table is a work of art! The craftsmanship is amazing and it's become the focal point of my living room.",
        date: "2023-09-05"
      },
      {
        id: 10,
        userId: 10,
        userName: "William Taylor",
        rating: 5,
        comment: "Absolutely beautiful table that looks even better in person. I'm ordering a second one!",
        date: "2023-08-29"
      }
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getAllProducts = (): Product[] => {
  return products;
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.categories.includes(category));
};

export const getProductsByMaterial = (material: string): Product[] => {
  return products.filter(product => product.material === material);
};

export const getProductsByPriceRange = (min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  products.forEach(product => {
    product.categories.forEach(category => {
      categories.add(category);
    });
  });
  return Array.from(categories).sort();
};

export const getAllMaterials = (): string[] => {
  const materials = new Set<string>();
  products.forEach(product => {
    materials.add(product.material);
  });
  return Array.from(materials).sort();
};
