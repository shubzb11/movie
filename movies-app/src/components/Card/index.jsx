import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const history = useNavigate();

  const showCardDetails = () => {
    const { imdbID } = details;
    history.push({
      pathname: `/carddetails/${imdbID}`,
      state: props.details,
    });
  };

  const { details } = props;

  return (
    <div className="card-body" onClick={showCardDetails}>
      <img
        src={details.Poster}
        alt="movies"
        style={{ width: "200px", height: "300px", borderRadius: "20px" }}
      />
    </div>
  );
};

export default Card;
