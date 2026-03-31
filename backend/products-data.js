const products = [
  {
    id: 1,
    name: "Bag of Rice",
    brand: "White Pearl",
    description: "Premium quality long-grain white rice. Perfect for all your cooking needs — jollof, fried rice, or plain. Available in 5kg, 10kg, 25kg and 50kg bags.",
    variants: ["5kg", "10kg", "25kg", "50kg"],
    category: "staples",
    image: "image/rice.jpeg",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Sunflower Vegetable Oil",
    brand: "Pura Refined",
    description: "High-quality refined sunflower oil. 5 litre bottles, high in polyunsaturates. Ideal for frying, shallow cooking, salad dressings and marinades.",
    variants: ["5L"],
    category: "oils",
    image: "image/oil.jpeg",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Foreign Spaghetti",
    brand: "Simply (Tesco)",
    description: "Premium imported spaghetti. 500g packs, sold per carton. Smooth texture, cooks perfectly every time.",
    variants: ["500g pack", "Carton (20 packs)"],
    category: "pasta",
    image: "image/spaghetti.jpeg",
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Quaker Oats",
    brand: "Quaker",
    description: "Wholesome rolled oats for a nutritious breakfast. Great for porridge, smoothies, and healthy snacking.",
    variants: ["500g", "1kg"],
    category: "breakfast",
    image: "image/quaker%20oat.webp",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Heinz Salad Cream",
    brand: "Heinz",
    description: "Original deliciously zingy salad cream. Perfect condiment for salads, sandwiches and more. Est. 1869.",
    variants: ["Standard bottle"],
    category: "condiments",
    image: "image/salad.jpeg",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Heinz Mayonnaise",
    brand: "Heinz",
    description: "Creamy and smooth mayonnaise made with free range eggs. Rich, indulgent taste for all your recipes.",
    variants: ["Standard bottle"],
    category: "condiments",
    image: "image/mayonnise.jpeg",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Light Live Alcohol-Free Wine",
    brand: "Light Live",
    description: "Premium alcohol-free wine range. Available in Cabernet Sauvignon (red), Chardonnay (white), and Rosé. Perfect for events and celebrations.",
    variants: ["Cabernet Sauvignon", "Chardonnay", "Rosé"],
    category: "beverages",
    image: "image/wine.jpeg",
    inStock: true,
    featured: false
  }
];

module.exports = products;
