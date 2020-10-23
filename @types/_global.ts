export type VForm = Vue & { validate: () => boolean };
export type RuleType = Array<(v: string | undefined) => string | boolean>;

export type InputType =
  | 'text'
  | 'date'
  | 'select'
  | 'time'
  | 'textarea'
  | 'checkbox'
  | 'file'
  | 'datetime';
