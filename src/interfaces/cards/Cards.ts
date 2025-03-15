<<<<<<< HEAD
import { Address } from "./Address";
import { Image } from "./Image";

export interface Card {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: Image;
  address: Address;
  bizNumber?: number;
  likes?: string[];
  user_id?: string;
=======
import { Address } from "./Address";
import { Image } from "./Image";

export interface Card {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: Image;
  address: Address;
  bizNumber?: number;
  likes?: string[];
  user_id?: string;
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}