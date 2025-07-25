import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import estrella from "../assets/img/estrella.jpg";

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${id}/`)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }, [id]);

    return (
        <div className="container text-light mt-4">
            {character ? (
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={estrella}
                            alt="Character"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>{character.name}</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum consequuntur veritatis corrupti qui eaque eum esse soluta laboriosam tenetur rerum, quaerat fugit nam repellat deserunt odit reiciendis tempore fugiat id at placeat aliquid. Voluptatibus enim repudiandae eligendi magni exercitationem esse, a nobis nemo similique, dolores autem earum dolor? Praesentium, alias deleniti? Atque, aliquid alias rerum ut possimus impedit laudantium perspiciatis quo est sint, ullam soluta voluptate pariatur facere ducimus repellat. Maiores illo dignissimos minima. Voluptas odio, ab, consectetur magnam debitis necessitatibus alias repellendus ratione ipsam eius aperiam quaerat reprehenderit!
                        </p>
                        <hr />
                        <p><strong>Gender:</strong> {character.gender}</p>
                        <p><strong>Hair Color:</strong> {character.hair_color}</p>
                        <p><strong>Eye Color:</strong> {character.eye_color}</p>
                        <p><strong>Birth Year:</strong> {character.birth_year}</p>
                    </div>
                </div>
            ) : (
                <p>Loading character...</p>
            )}
        </div>
    );
};

export default CharacterDetail;
