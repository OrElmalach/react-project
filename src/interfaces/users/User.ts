<<<<<<< HEAD
import { UserAddress } from "./UserAddress";
import { UserImage } from "./UserImage";
import { UserName } from "./UserName";


export interface User {
  name: UserName;
  phone: string;
  email: string;
  password: string;
  image: UserImage;
  address: UserAddress;
  isBusiness: boolean;
  isAdmin: boolean;
=======
import { UserAddress } from "./UserAddress";
import { UserImage } from "./UserImage";
import { UserName } from "./UserName";


export interface User {
  name: UserName;
  phone: string;
  email: string;
  password: string;
  image: UserImage;
  address: UserAddress;
  isBusiness: boolean;
  isAdmin: boolean;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}