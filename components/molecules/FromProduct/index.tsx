import { FC, memo } from "react";
import { Formik, Form } from "formik";
import { FormProductType } from "./types";
import Button from "react-bootstrap/esm/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormSelect from "react-bootstrap/FormSelect";

export const FromProducts: FC<FormProductType> = ({
  product,
  onClose,
  validationSchema,
  onSubmit,
  form,
  categories,
}) => {
  return (
    <>
      <h4 className="mb-3">{form}</h4>
      <Formik
        initialValues={product}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FormGroup className="mb-3">
              <FormLabel>Title</FormLabel>
              <FormControl
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.title && !!errors.title}
              />
              <FormControl.Feedback type="invalid">
                {errors.title}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Price</FormLabel>
              <FormControl
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.price && !!errors.price}
              />
              <FormControl.Feedback type="invalid">
                {errors.price}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Description</FormLabel>
              <FormControl
                as="textarea"
                name="description"
                rows={3}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.description && !!errors.description}
              />
              <FormControl.Feedback type="invalid">
                {errors.description}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Category</FormLabel>
              <FormSelect
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.category && !!errors.category}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </FormSelect>
              <FormControl.Feedback type="invalid">
                {errors.category}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Image (URL)</FormLabel>
              <FormControl
                name="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.image && !!errors.image}
              />
              <FormControl.Feedback type="invalid">
                {errors.image}
              </FormControl.Feedback>
            </FormGroup>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="btn btn-custom btn btn-primary">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default memo(FromProducts);
