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
  colors?: string[];
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

const productDescription = `Made with high-quality melamine table, designed for durability, functionality, and a sleek aesthetic. Crafted from 15mm particle melamine board, 1.5"X1.5" powder coated steel frame and legs. This table is perfect for home, office, or commercial use.

Features:
✔ Sturdy & Durable – Made from premium 15mm melamine-coated particleboard for a smooth, scratch-resistant surface.
✔ Modern Design – Available in White, American Ash White, Black, and Teak finishes to match any décor.
✔ Easy to Clean – Resistant to stains, moisture, and everyday wear.
✔ Multi-Purpose Use – Ideal for dining, workstations, study desks, conference rooms, and more.
✔ Customizable Sizes – Various dimensions available to suit your needs.
(1) 24" X 32" = Rs.10,500
(2) 24" X 36" = Rs.11,500
(3) 24" X 84" = Rs.13,500
(4) 24" X 60" = Rs.15,000

COLOURS:
⚪ White
🔘 American Ash White
⚫ Black 
🟤 Teak

💳 Cash on Delivery (COD) Available!`;

const cupboardDescription = `Made with high-quality melamine and premium steel hardware, designed for durability, functionality, and modern aesthetic. Each cupboard features adjustable shelving, soft-close doors, and ample storage space.

Features:
✔ Sturdy & Durable – Crafted from premium melamine-coated particleboard for lasting quality.
✔ Modern Design – Available in White, American Ash White, Black, and Teak finishes.
✔ Adjustable Shelving – Customize your storage configuration to suit your needs.
✔ Soft-Close Doors – Premium hardware for a luxurious feel.
✔ Multiple Storage Options – Various compartments for organized storage.

SIZE OPTIONS:
(1) Small (80x40x120cm) = Rs.25,500
(2) Medium (100x45x180cm) = Rs.32,500
(3) Large (120x50x200cm) = Rs.39,500

COLOURS:
⚪ White
🔘 American Ash White
⚫ Black 
🟤 Teak

💳 Cash on Delivery (COD) Available!`;

const bookratkDescription = `Crafted with precision and style, our bookracks combine functionality with modern design. Perfect for displaying your book collection, decorative items, or essential storage.

Features:
✔ Versatile Design – Suitable for books, decor items, and practical storage.
✔ Premium Materials – Constructed from high-quality melamine and steel supports.
✔ Adjustable Shelves – Customize shelf heights according to your needs.
✔ Sleek Aesthetic – Clean lines and modern finishes to complement any space.
✔ Easy Assembly – Simple installation with comprehensive instructions.

SIZE OPTIONS:
(1) Compact (80x30x120cm) = Rs.18,500
(2) Standard (100x35x180cm) = Rs.24,500
(3) Deluxe (120x40x200cm) = Rs.32,500

COLOURS:
⚪ White
🔘 American Ash White
⚫ Black 
🟤 Teak

💳 Cash on Delivery (COD) Available!`;

const tableColors = ["White", "American Ash White", "Black", "Teak"];

export const products: Product[] = [
  {
    id: 1,
    name: "Elegance Dining Table",
    shortDescription: "Modern melamine dining table with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://i.ibb.co/gMcKWyFk/elegance-dining-1.jpg",
      "https://i.ibb.co/Mkpp82D7/elegance-dining-2.jpg",
      "https://i.ibb.co/DnMk7x5/elegance-dining-3.jpg",
      "https://i.ibb.co/p6SVT1Wj/elegance-dining-4.jpg",
      "https://i.ibb.co/N27prg9D/rustic-dining-1.jpg"
    ],
    categories: ["Dining", "Modern", "Office"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    colors: tableColors,
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
    shortDescription: "Modern melamine coffee table with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://i.ibb.co/GfhnC8Gy/coffee-table-1.jpg",
      "https://i.ibb.co/LdHJRGZY/coffee-table-2.jpg",
      "https://i.ibb.co/HT446tJn/coffee-table-3.jpg",
      "https://i.ibb.co/MWYyYrn/coffee-table-4.jpg",
      "https://i.ibb.co/yFbZFP3C/coffee-table-5.jpg"
    ],
    categories: ["Coffee", "Modern", "Living Room"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: true,
    rating: 4.7,
    colors: tableColors,
    reviews: [
      {
        id: 3,
        userId: 3,
        userName: "Emma Wilson",
        rating: 5,
        comment: "This coffee table exceeded my expectations! The quality is outstanding.",
        date: "2023-09-02"
      }
    ]
  },
  {
    id: 3,
    name: "Executive Desk",
    shortDescription: "Modern melamine executive desk with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://i.ibb.co/997VBVdX/desk-1.jpg",
      "https://i.ibb.co/LXkYMk1S/desk-2.jpg",
      "https://i.ibb.co/GvWKd096/desk-3.jpg",
      "https://i.ibb.co/hFkLF0pG/desk-4.jpg"
    ],
    categories: ["Office", "Modern", "Desk"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: false,
    rating: 4.9,
    colors: tableColors,
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
    shortDescription: "Modern melamine console table with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    categories: ["Console", "Modern", "Living Room"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: true,
    rating: 4.6,
    colors: tableColors,
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
        comment: "Love the modern look and sturdiness of this table. The finish is exactly as shown in the photos.",
        date: "2023-07-15"
      }
    ]
  },
  {
    id: 5,
    name: "Modern Meeting Table",
    shortDescription: "Modern melamine conference table with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    categories: ["Conference", "Modern", "Office"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: false,
    rating: 4.7,
    colors: tableColors,
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
    shortDescription: "Modern melamine side table with steel frame",
    description: productDescription,
    price: 13500,
    images: [
      "https://images.unsplash.com/photo-1631455853929-ba06397f9a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80",
      "https://images.unsplash.com/photo-1601590384651-c3aca464b059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    categories: ["Side Table", "Modern", "Living Room"],
    material: "15mm Melamine Particleboard with Steel Frame",
    dimensions: {
      width: 24,
      length: 48,
      height: 36
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    colors: tableColors,
    reviews: [
      {
        id: 9,
        userId: 9,
        userName: "Sophia Martinez",
        rating: 5,
        comment: "This side table is perfect! The quality is amazing and it matches perfectly with our decor.",
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
  },
  {
    id: 7,
    name: "Modern Storage Cupboard",
    shortDescription: "Contemporary storage cupboard with adjustable shelving",
    description: cupboardDescription,
    price: 32500,
    images: [
      "https://i.ibb.co/gbKTdMG/cupboard-1.jpg",
      "https://i.ibb.co/zV72PqK/cupboard-2.jpg",
      "https://i.ibb.co/R4JBj5G/cupboard-3.jpg",
      "https://i.ibb.co/kVfJrs1/cupboard-4.jpg",
      "https://i.ibb.co/0js0m9K/cupboard-5.jpg"
    ],
    categories: ["Cupboard", "Storage", "Bedroom", "Office"],
    material: "Melamine Particleboard with Steel Hardware",
    dimensions: {
      width: 100,
      length: 45,
      height: 180
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    colors: tableColors,
    reviews: [
      {
        id: 11,
        userId: 3,
        userName: "Thomas Wilson",
        rating: 5,
        comment: "Excellent quality cupboard with plenty of storage. The soft-close doors are a great feature!",
        date: "2023-10-15"
      },
      {
        id: 12,
        userId: 5,
        userName: "Jennifer Lee",
        rating: 4,
        comment: "Very sturdy and looks elegant in our bedroom. Assembly took a bit longer than expected.",
        date: "2023-11-22"
      }
    ]
  },
  {
    id: 8,
    name: "Modern Display Bookrack",
    shortDescription: "Contemporary bookrack with adjustable shelving",
    description: bookratkDescription,
    price: 24500,
    images: [
      "https://i.ibb.co/1YLVhYr/bookrack-1.jpg",
      "https://i.ibb.co/Q3kPLJW/bookrack-2.jpg",
      "https://i.ibb.co/Fb2gJkS/bookrack-3.jpg",
      "https://i.ibb.co/39sLbfS/bookrack-4.jpg",
      "https://i.ibb.co/rKJv5Gg/bookrack-5.jpg",
      "https://i.ibb.co/SX4k3Fw/bookrack-6.jpg"
    ],
    categories: ["Bookrack", "Shelving", "Living Room", "Office"],
    material: "Melamine Particleboard with Steel Supports",
    dimensions: {
      width: 100,
      length: 35,
      height: 180
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    colors: tableColors,
    reviews: [
      {
        id: 13,
        userId: 2,
        userName: "Michael Chen",
        rating: 5,
        comment: "Perfect bookrack for my collection. Sturdy, easy to assemble, and looks great!",
        date: "2023-09-18"
      },
      {
        id: 14,
        userId: 4,
        userName: "David Brown",
        rating: 5,
        comment: "The adjustable shelves make this bookrack incredibly versatile. Excellent purchase.",
        date: "2023-10-05"
      }
    ]
  },
  {
    id: 9,
    name: "Compact Office Bookrack",
    shortDescription: "Space-saving bookrack for small offices and apartments",
    description: bookratkDescription,
    price: 18500,
    images: [
      "https://i.ibb.co/Q3kPLJW/bookrack-2.jpg",
      "https://i.ibb.co/1YLVhYr/bookrack-1.jpg", 
      "https://i.ibb.co/Fb2gJkS/bookrack-3.jpg",
      "https://i.ibb.co/39sLbfS/bookrack-4.jpg"
    ],
    categories: ["Bookrack", "Shelving", "Compact", "Office"],
    material: "Melamine Particleboard with Steel Supports",
    dimensions: {
      width: 80,
      length: 30,
      height: 120
    },
    inStock: true,
    featured: false,
    rating: 4.7,
    colors: tableColors,
    reviews: [
      {
        id: 15,
        userId: 1,
        userName: "Sarah Johnson",
        rating: 5,
        comment: "Perfect size for my small apartment. Great quality and value for money!",
        date: "2023-11-10"
      }
    ]
  },
  {
    id: 10,
    name: "Executive Wardrobe Cupboard",
    shortDescription: "Spacious wardrobe cupboard with premium finishes",
    description: cupboardDescription,
    price: 39500,
    images: [
      "https://i.ibb.co/R4JBj5G/cupboard-3.jpg",
      "https://i.ibb.co/gbKTdMG/cupboard-1.jpg",
      "https://i.ibb.co/0js0m9K/cupboard-5.jpg",
      "https://i.ibb.co/kVfJrs1/cupboard-4.jpg"
    ],
    categories: ["Cupboard", "Wardrobe", "Bedroom", "Premium"],
    material: "Melamine Particleboard with Steel Hardware",
    dimensions: {
      width: 120,
      length: 50,
      height: 200
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    colors: tableColors,
    reviews: [
      {
        id: 16,
        userId: 6,
        userName: "Robert Thompson",
        rating: 5,
        comment: "This wardrobe exceeded my expectations. The quality is outstanding and it has transformed our bedroom.",
        date: "2023-12-05"
      },
      {
        id: 17,
        userId: 7,
        userName: "Michelle Garcia",
        rating: 4,
        comment: "Beautiful design and very spacious. Great customer service when I had questions about assembly.",
        date: "2024-01-18"
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
