<<<<<<< HEAD
import axios from "axios";
import { Card } from "../interfaces/cards/Cards";


const API: string = import.meta.env.VITE_CARDS_API;

// get all cards
export function getAllCards() {
  return axios.get(API);
}

// post new card
export function postNewCard(normalizedCard: Card) {
  return axios.post(API, normalizedCard, {
    headers: {
      "x-auth-token": sessionStorage.getItem("token"),
    },
  });
=======
import axios from "axios";
import { Card } from "../interfaces/cards/Cards";


const API: string = import.meta.env.VITE_CARDS_API;

// get all cards
export function getAllCards() {
  return axios.get(API);
}

// post new card
export function postNewCard(normalizedCard: Card) {
  return axios.post(API, normalizedCard, {
    headers: {
      "x-auth-token": sessionStorage.getItem("token"),
    },
  });
>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
}