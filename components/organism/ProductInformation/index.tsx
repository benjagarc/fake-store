"use client";

import { Product } from "@/components/molecules/Card/interface";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stylesCard from "@/components/molecules/Card/index.module.scss";
import ProductDescription from "@/components/molecules/ProductDescription";
import { FC, memo, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/context";
import { FromProducts } from "@/components/molecules/FromProduct";
import { validationSchemaEdit } from "./schema";
import { deleteProductById, updateProductById } from "@/request/products";
import MessageModal from "@/components/molecules/MessageModal";

export const ProductInformation: FC<Product> = (product) => {
  const { showModal, hideModal } = useModal();
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const displayForm = () => {
    showModal(
      <FromProducts
        product={updatedProduct}
        onClose={hideModal}
        form={"Editar productos"}
        validationSchema={validationSchemaEdit}
        onSubmit={async (values) => {
          const { image, title, price, category, description } = values;
          await updateProductById(
            updatedProduct.id,
            JSON.stringify({ image, title, price, category, description })
          );
          setUpdatedProduct((prev) => ({ ...prev, ...values }));
          hideModal();
        }}
      />
    );
  };

  const displayMessageDelete = () => {
    showModal(
      <MessageModal
        title={"Are you sure you want to delete this product?"}
        content="This action cannot be undone."
        handleClickCancel={hideModal}
        handleClickConfirm={async () => {
          await deleteProductById(updatedProduct.id);
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
                src={updatedProduct?.image ?? ""}
                alt={updatedProduct?.title ?? ""}
                width={400}
                height={400}
                className="img-fluid"
                priority
              />
            </div>
          </Col>
          <Col md={6}>
            {
              <ProductDescription
                {...updatedProduct}
                handleEditClick={displayForm}
                handleDeleteClick={displayMessageDelete}
              />
            }
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default memo(ProductInformation);
