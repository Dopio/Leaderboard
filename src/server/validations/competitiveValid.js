import { body } from 'express-validator'

export const competitiveValidation = [
  body('competitiveTitle').isLength({ min: 3 }).isString(),
  body('competitiveData').optional().isLength({ min: 3 }).isString(),
  body('studentName').optional().isString(),
  body('studentPoints').optional().isNumeric()
]