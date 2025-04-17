export interface CardProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: typeRating;
  title: string;
}

type typeRating = {
  rate: number;
  count: number;
};
