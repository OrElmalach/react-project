<<<<<<< HEAD
import { jwtDecode } from "jwt-decode";

export function decodeToken(token: any) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
=======
import { jwtDecode } from "jwt-decode";

export function decodeToken(token: any) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}