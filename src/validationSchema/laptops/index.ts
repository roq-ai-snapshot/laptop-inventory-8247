import * as yup from 'yup';

export const laptopValidationSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  serial_number: yup.string().required(),
  purchase_date: yup.date().required(),
  warranty_expiry_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
