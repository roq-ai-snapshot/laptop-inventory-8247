import * as yup from 'yup';

export const itValidationSchema = yup.object().shape({
  maintenance_date: yup.date().required(),
  maintenance_notes: yup.string().required(),
  laptop_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
