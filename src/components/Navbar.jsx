// src/components/Navbar.jsx
import { useContext } from "react";
import { Context } from "../store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { favorites, removeFavorite } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          style={{ width: "120px" }}
          alt="Star Wars"
        />
      </Link>
      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites ({favorites.length})
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {favorites.length === 0 ? (
            <li className="dropdown-item text-muted">No favorites yet</li>
          ) : (
            favorites.map((item, i) => (
              <li key={i} className="dropdown-item d-flex justify-content-between align-items-center">
                {item}
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeFavorite(item)}>
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
