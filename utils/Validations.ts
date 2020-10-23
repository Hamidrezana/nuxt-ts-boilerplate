import { Strings } from './_';

export default {
  fillRules: [
    (v?: string | number) => !!v || v === '0' || v === 0 || Strings.validations.mustFilled,
  ],
  emailRules: [
    (v?: string) => !!v || Strings.validations.mustFilled,
    (v?: string) => (!!v && /.+@.+/.test(v)) || Strings.validations.notAcceptable,
  ],
  numberRules: [
    (v?: string) => !!v || Strings.validations.mustFilled,
    (v?: string) => (!!v && /^\d*\.?\d*$/.test(v)) || Strings.validations.notAcceptable,
  ],
};
