import { Product } from "../Card/interface";

export interface ProductDescriptionProps extends Product {
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}
