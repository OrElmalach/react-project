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
}