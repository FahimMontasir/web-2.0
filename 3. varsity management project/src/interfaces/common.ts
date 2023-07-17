import { USER_ROLE } from '../enums/user';
import { IGenericErrorMessage } from './error';

export type IDecodedUser = {
  id: string;
  role: USER_ROLE;
  iat: number;
  exp: number;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type IGenericPaginationResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
