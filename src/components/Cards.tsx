import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/cards/Cards";
import { getAllCards } from "../services/cardsService";
import Bcard from "./cards/Bcard";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCards()
      .then((res) => {
        console.log(res.data);
        setCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isLoading ? (
        <center>
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      ) : (
        <div className="row">
          {cards.map((card: Card) => (
            <Bcard key={String(card._id)} card={card} />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;