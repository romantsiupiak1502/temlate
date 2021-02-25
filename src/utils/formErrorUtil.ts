import * as validation from './validationUtil';

type IValidation = (value: string, newValue?: string) => string | undefined;

export const combineValidation = (validations: Array<IValidation>) => (value: string) => {
  for(const item of validations) {
    const result = item(value);
    if(result) {
      return result;
    }
  }
  return undefined;
}

export const required: IValidation = (value: string) => validation.isRequired(value) ? undefined : 'Field is required';
export const email: IValidation = (value: string) => validation.isEmail(value) ? undefined : 'Wrong email';
export const password: IValidation = (value: string) => validation.isPassword(value)
  ? undefined : 'Bad characters password';
export const date: IValidation = (value: string) => validation.isFuture(value)
  ? undefined : 'You can not to be born in the future';
export const age: IValidation = (value: string) => validation.isAdult(value)
  ? undefined : 'You are not adult';
export const passwordRequirements: IValidation = (value, newValue) => validation
  .passwordMatching(value, newValue)
  ? undefined : 'Passwords do not match';
