/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { IDecodedUser } from './common';

declare global {
  namespace Express {
    interface Request {
      user: IDecodedUser | null;
    }
  }
}
