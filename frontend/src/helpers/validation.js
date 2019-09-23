import { EMAIL_VALIDATION } from 'constants/validation';

export const required = value =>
  value || typeof value === 'string' ? undefined : 'form.validations.required';

export const email = value =>
  value && !EMAIL_VALIDATION.test(value) ? 'form.validations.email' : undefined;

export const minPasswordValue = value =>
  value && value.length < 8 ? `form.validations.password.min` : undefined;

export const maxPasswordValue = value =>
  value && value.length > 30 ? `form.validations.password.max` : undefined;

export const minNameValue = value =>
  value && value.length < 5 ? `form.validations.name.min` : undefined;

export const maxNameValue = value =>
  value && value.length > 15 ? `form.validations.name.max` : undefined;
