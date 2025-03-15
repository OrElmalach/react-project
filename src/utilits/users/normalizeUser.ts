<<<<<<< HEAD

import { unnormalizedUser } from "../../interfaces/users/UnormalizedUser";
import { User } from "../../interfaces/users/User";


export function normalizeUser(values: unnormalizedUser): User {
  return {
    name: {
      first: values.first,
      middle: values.middle,
      last: values.last,
    },
    phone: values.phone,
    email: values.email,
    password: values.password,
    image: {
      url: values.image,
      alt: values.alt,
    },
    address: {
      state: values.state,
      country: values.country,
      city: values.city,
      street: values.street,
      houseNumber: values.houseNumber,
      zip: values.zip,
    },
    isBusiness: values.isBusiness,
  };
=======

import { unnormalizedUser } from "../../interfaces/users/UnormalizedUser";
import { User } from "../../interfaces/users/User";


export function normalizeUser(values: unnormalizedUser): User {
  return {
    name: {
      first: values.first,
      middle: values.middle,
      last: values.last,
    },
    phone: values.phone,
    email: values.email,
    password: values.password,
    image: {
      url: values.image,
      alt: values.alt,
    },
    address: {
      state: values.state,
      country: values.country,
      city: values.city,
      street: values.street,
      houseNumber: values.houseNumber,
      zip: values.zip,
    },
    isBusiness: values.isBusiness,
  };
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}