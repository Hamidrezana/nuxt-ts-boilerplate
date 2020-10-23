import Store from './Store';

export interface UserProps {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

export default class User extends Store {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  constructor(props: UserProps) {
    super();
    this.userId = props.userId;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.avatar = props.avatar;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
