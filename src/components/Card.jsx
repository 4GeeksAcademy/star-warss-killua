import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store";
import estrella from "../assets/img/estrella.jpg";

const Card = ({ item, type, index }) => {
  const { addFavorite } = useContext(Context);

  const imageUrl = estrella;

  return (
    <div className="card m-2" style={{ minWidth: "250px" }}>
      <img src={imageUrl} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        {type === "people" ? (
          <>
            <p className="card-text">Gender: {item.gender}</p>
            <p className="card-text">Hair Color: {item.hair_color}</p>
            <p className="card-text">Eye Color: {item.eye_color}</p>
          </>
        ) : (
          <>
            <p className="card-text">Population: {item.population}</p>
            <p className="card-text">Terrain: {item.terrain}</p>
          </>
        )}
        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${index + 1}`} className="btn btn-outline-primary">
            Learn More
          </Link>
          <button onClick={() => addFavorite(item.name)} className="btn btn-outline-warning">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;