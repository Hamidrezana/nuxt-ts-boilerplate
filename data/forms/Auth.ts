import { Validations } from '~/utils/_';
import { IFieldProps } from '~/@types/_components';

export const RegisterFields: Array<IFieldProps> = [
  {
    name: 'firstName',
    rules: Validations.fillRules,
  },
  {
    name: 'lastName',
    rules: Validations.fillRules,
  },
  {
    name: 'email',
    rules: Validations.emailRules,
  },
  {
    name: 'username',
    rules: Validations.fillRules,
  },
  {
    name: 'password',
    rules: Validations.fillRules,
    type: 'password',
  },
];

export const LoginFields: Array<IFieldProps> = [
  {
    name: 'username',
    rules: Validations.fillRules,
  },
  {
    name: 'password',
    rules: Validations.fillRules,
    type: 'password',
  },
];
