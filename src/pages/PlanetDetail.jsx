import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import estrella from "../assets/img/estrella.jpg";

const PlanetDetail = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/planets/${id}/`)
            .then(res => res.json())
            .then(data => setPlanet(data));
    }, [id]);

    return (
        <div className="container text-light mt-4">
            {planet ? (
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={estrella}
                            alt="Planet"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>{planet.name}</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque iste recusandae, impedit aut at aliquid perspiciatis alias quae nemo. Iure reprehenderit, iste id aliquid rerum illo itaque ipsam enim porro animi nobis optio officia incidunt laboriosam reiciendis voluptatibus cum dolor dignissimos odio. Eius, nesciunt impedit laudantium fuga tempore, amet itaque veniam possimus cumque voluptatem libero odio quod iste nemo culpa voluptas velit facilis consequuntur sit! Quaerat officiis labore numquam tempora eligendi quo exercitationem, nobis mollitia magni ex ad deserunt, vero culpa distinctio corrupti ratione. Quam molestiae optio numquam inventore?
                        </p>
                        <hr />
                        <p><strong>Population:</strong> {planet.population}</p>
                        <p><strong>Terrain:</strong> {planet.terrain}</p>
                        <p><strong>Climate:</strong> {planet.climate}</p>
                        <p><strong>Diameter:</strong> {planet.diameter}</p>
                    </div>
                </div>
            ) : (
                <p>Loading planet...</p>
            )}
        </div>
    );
};

export default PlanetDetail;
