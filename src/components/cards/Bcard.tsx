<<<<<<< HEAD
import { FunctionComponent } from "react";
import { Card } from "../../interfaces/cards/Cards";

interface BcardProps {
  card: Card;
}

const Bcard: FunctionComponent<BcardProps> = ({ card }) => {
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={card.image.url}
          alt={card.image.alt}
        />
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Phone: </span>
            <span>{card.phone}</span>
            <br />
            <span>Adress: </span>
            <span>{`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}</span>

            <br />
            <span>Card Number: </span>
            <span>{card.bizNumber}</span>
          </li>
        </ul>
        <div className="card-body">
          <a href={`tel:${card.phone}`}>
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
};

=======
import { FunctionComponent } from "react";
import { Card } from "../../interfaces/cards/Cards";

interface BcardProps {
  card: Card;
}

const Bcard: FunctionComponent<BcardProps> = ({ card }) => {
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={card.image.url}
          alt={card.image.alt}
        />
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Phone: </span>
            <span>{card.phone}</span>
            <br />
            <span>Adress: </span>
            <span>{`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}</span>

            <br />
            <span>Card Number: </span>
            <span>{card.bizNumber}</span>
          </li>
        </ul>
        <div className="card-body">
          <a href={`tel:${card.phone}`}>
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </>
  );
};

>>>>>>> e37926e37b9a313da62e0567fc341065ea047aa8
export default Bcard;