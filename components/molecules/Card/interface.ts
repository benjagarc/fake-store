export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: typeRating;
  title: string;
}

export type typeRating = {
  rate: number;
  count: number;
};
