
let product_list = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Freshly picked organic tomatoes from local farms.",
    price: 3.99,
    image: "/tomato.jpg", // Use the imported image
  },
  {
    id: 2,
    name: "Free-range Eggs",
    description: "A dozen farm-fresh free-range eggs.",
    price: 5.49,
    image: "/eggs.jpg", // Use the imported image
  },
  {
    id: 3,
    name: "Local Honey",
    description: "Pure and raw honey from local beekeepers.",
    price: 12.99,
    image: "/honey.jpg", // Use the imported image
  },
  {
    id: 4,
    name: "Mirchi",
    description: "Organic basil leaves for your favorite recipes.",
    price: 2.99,
    image: "/mirchi.jpg", // Use the imported image
  },
];

// Function to add new products to the list
export const addProduct = (newProduct) => {
  // Assign a new ID to the new product
  newProduct.id = product_list.length + 1;
  product_list.push(newProduct);
};
export default product_list;
