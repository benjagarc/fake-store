import * as Yup from "yup";
export const validationSchemaEdit = Yup.object({
  title: Yup.string().required("Título requerido"),
  price: Yup.number().required("Precio requerido").min(0),
  description: Yup.string().required("Descripción requerida"),
  category: Yup.string().required("Categoría requerida"),
  image: Yup.string().url("URL no válida").required("Imagen requerida"),
});
