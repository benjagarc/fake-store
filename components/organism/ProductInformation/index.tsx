"use client";

import { Product } from "@/components/molecules/Card/interface";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stylesCard from "@/components/molecules/Card/index.module.scss";
import ProductDescription from "@/components/molecules/ProductDescription";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/context";
import { FromProducts } from "@/components/molecules/FromProduct";
import { validationSchemaEdit } from "./schema";
import { updateProductById } from "@/request/products";

export const ProductInformation: FC<Product> = (product) => {
  const { showModal, hideModal } = useModal();


  const displayForm = () => {
    showModal(
      <FromProducts
        product={product}
        onClose={hideModal}
        form={"Editar productos"}
        validationSchema={validationSchemaEdit}
        onSubmit={async (values) => {
          const { image, title, price, category, description } = values;
          await updateProductById(
            product.id,
            JSON.stringify({ image, title, price, category, description })
          );
          hideModal();
        }}
      />
    );
  };



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
          <Col md={6}>
            {<ProductDescription {...product} onClick={displayForm} />}
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default memo(ProductInformation);
