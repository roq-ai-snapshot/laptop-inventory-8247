import * as yup from 'yup';

export const financeValidationSchema = yup.object().shape({
  purchase_price: yup.number().integer().required(),
  depreciation_value: yup.number().integer().required(),
  current_value: yup.number().integer().required(),
  laptop_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
