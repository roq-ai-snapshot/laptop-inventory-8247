import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  laptop_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
