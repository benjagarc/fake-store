"use client";

import { FC, memo } from "react";
import { Product } from "../Card/interface";
import Card from "react-bootstrap/esm/Card";
import { StarRating } from "@/components/atoms/StartRating";

export const ProductDescription: FC<Product> = ({
  title,
  category,
  description,
  rating,
  price,
}) => {
  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Body className="d-flex flex-column justify-content-between h-100">
          <div>
            <Card.Title className="fs-4">{title}</Card.Title>
            <StarRating {...rating} />
            <p className="h5 fw-bold my-2">${price}</p>
          </div>
            <Card.Subtitle className="mb-2 mt-4 text-muted text-capitalize">
              {category}
            </Card.Subtitle>
            <Card.Text className="my-3">{description}</Card.Text>
          <div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default memo(ProductDescription);
