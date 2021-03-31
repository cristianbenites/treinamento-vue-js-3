import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('should give an error when the payload is empty', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error when the payload is less than 3 characters', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should return true when the input has a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('should give an error when the payload is empty', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error when the email is invalid', () => {
    expect(validateEmptyAndEmail('qualqueremail')).toBe('*Este campo precisa ser um e-mail válido')
  })

  it('should return true when the input has a correct email', () => {
    expect(validateEmptyAndEmail('email.test@myemail.com')).toBe(true)
  })
})
