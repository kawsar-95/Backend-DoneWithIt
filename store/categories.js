const categories = [
  {
    id: 1,
    name: "Relocation",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Car Servicing",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Gadgets Repair",
    icon: "camera",
    backgroundColor: "#fed330",
    color: "white"
  },
  {
    id: 4,
    name: "Courier Services",
    icon: "cards",
    backgroundColor: "#26de81",
    color: "white"
  },
  {
    id: 5,
    name: "Pest Control",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    color: "white"
  },
  {
    id: 6,
    name: "Sports",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    color: "white"
  },
  {
    id: 7,
    name: "Internet Service Provider",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    color: "white"
  },
  {
    id: 8,
    name: "Books",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white"
  },
  {
    id: 9,
    name: "plumbing",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
