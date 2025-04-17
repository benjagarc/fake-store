import { CardProps } from "@/components/molecules/Card/interface";

const API_URL = process.env.API_URL;

export const getAllProducts = async (): Promise<CardProps[]> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "get",
  });
  const data = await response.json();
  return data;
};
