export default interface ProductI {
    name: string;
    slug: string;
    image: string;
    category: string;
    brand: string;
    price: number;
    countInStock: number;
    description: string; // Fixed the property name
    rating: number;
    numReviews: number; // Fixed the property name
  }