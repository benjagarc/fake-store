"use client";
import { Product } from "./interface";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import Button from "react-bootstrap/Button";

export const CardProduct: FC<Product> = ({
  image,
  title,
  price,
  description,
}) => {
  return (
    <>
      <Col style={{ alignSelf: "stretch" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h-100 shadow-sm"
        >
          <Card className={`${styles.cardCustom} h-100`}>
            <div className={`${styles.containerImg} overflow-hidden`}>
              <Card.Img src={image} alt={title} />
            </div>
            <Card.Body className={`${styles.bodyBetween}`}>
              <Card.Title className={`fs-6 ${styles.cardTitle}`}>
                {title}
              </Card.Title>
              <Card.Text className={`${styles.cardDescription} mb-2`}>
                {description}
              </Card.Text>
              <Card.Text className="fw-bold">${price}</Card.Text>
              <Button className="btn btn-custom">Ver más</Button>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </>
  );
};

export default memo(CardProduct);
