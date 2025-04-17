import { Product } from "@/components/molecules/Card/interface";

const API_URL = process.env.API_URL;

export const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Algo salió mal");
  }
  return res.json();
};

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "get",
  });
  return handleResponse(response);
};
