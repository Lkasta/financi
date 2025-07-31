import { verify } from "jsonwebtoken";

export function verifyToken(token: string) {
  try {
    const decoded = verify(token, process.env.JWT_SECRET!) as {
      name: string;
      code: string;
      iat: number;
      exp: number;
    };

    return decoded;
  } catch (err) {
    return err;
  }
}
