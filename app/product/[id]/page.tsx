import { notFound } from "next/navigation";
import Container from "react-bootstrap/Container";
import { Product } from "@/components/molecules/Card/interface";
import { ProductInformation } from "@/components/organism/ProductInformation";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  return {
    title: `Producto #${id} | FakeStore`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { id: idParams } = await params;
  const response = await fetch(
    `https://fakestoreapi.com/products/${idParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) return notFound();

  const product: Product = await response.json();

  return (
    <Container className="py-4">
      <ProductInformation {...product} />
    </Container>
  );
}
