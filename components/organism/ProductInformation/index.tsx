"use client";

import { Product } from "@/components/molecules/Card/interface";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stylesCard from "@/components/molecules/Card/index.module.scss";
import ProductDescription from "@/components/molecules/ProductDescription";
import { FC, memo } from "react";

export const ProductInformation: FC<Product> = (product) => {
  return (
    <>
      <Row className="g-4">
        <Col md={6}>
          <div className={`${stylesCard.containerImg} overflow-hidden`}>
            <Image
              src={product?.image ?? ""}
              alt={product?.title ?? ""}
              width={400}
              height={400}
              className="img-fluid"
            />
          </div>
        </Col>

        <Col md={6}>{<ProductDescription {...product} />}</Col>
      </Row>
    </>
  );
};

export default memo(ProductInformation);
