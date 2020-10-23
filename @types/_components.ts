import { InputType, RuleType } from './_global';

export interface IFieldProps {
  name: string;
  rules?: RuleType;
  isDate?: boolean;
  inputType?: InputType;
  label?: string;
  disabled?: boolean;
  clearable?: boolean;
  min?: number;
  max?: number;
  hint?: string;
  persistentHint?: boolean;
  type?: string;
}
