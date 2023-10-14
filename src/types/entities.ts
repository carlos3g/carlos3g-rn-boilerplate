import { Gender, UserStatus } from '@app/types/enums';

export type User = {
  uuid: string;
  name: string;
  email: string | null;
  phone: string;
  password: string;
  status: UserStatus;
  createdAt: Date;
  gender: Gender;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type Address = {
  cityId: string;
  postalCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  state: string;
};
