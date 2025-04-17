export interface TDecodedUser {
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

import { jwtDecode } from "jwt-decode";
export const verifyToken = (token: string):TDecodedUser => {
  return jwtDecode(token);
};
