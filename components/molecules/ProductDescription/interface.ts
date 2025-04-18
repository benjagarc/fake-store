import { Product } from "../Card/interface";

export interface ProductDescriptionProps extends Product {
    onClick: () => void;
} 