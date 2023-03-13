const yup = require("yup");

const createOrderValidator = yup.object({
  books: yup
    .array()
    .of(
      yup.object({
        id: yup.number().integer().positive().required(),
        quantity: yup.number().integer().positive().required(),
      })
    )
    .required()
    .min(1),
});

const updateOrderValidator = yup.object({
  title: yup.string().max(100).trim().required(),
  duration: yup.number().integer().positive().required(),
});

module.exports = { createOrderValidator, updateOrderValidator };
