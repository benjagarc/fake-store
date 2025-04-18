"use client";

import { Product } from "@/components/molecules/Card/interface";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stylesCard from "@/components/molecules/Card/index.module.scss";
import ProductDescription from "@/components/molecules/ProductDescription";
import { FC, memo } from "react";
import { motion } from "framer-motion";

export const ProductInformation: FC<Product> = (product) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-100 py-5"
      >
        <Row className="g-4">
          <Col md={6}>
            <div
              className={`${stylesCard.containerImg} overflow-hidden shadow-sm h-100`}
            >
              <Image
                src={product?.image ?? ""}
                alt={product?.title ?? ""}
                width={400}
                height={400}
                className="img-fluid"
                priority
              />
            </div>
          </Col>

          <Col md={6}>{<ProductDescription {...product} />}</Col>
        </Row>
      </motion.div>
    </>
  );
};

export default memo(ProductInformation);
