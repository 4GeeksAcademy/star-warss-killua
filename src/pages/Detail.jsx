import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/${type}/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [type, id]);

    const imgUrl = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : "planets"}/${id}.jpg`;

    return (
        <div className="container text-light mt-4">
            {item ? (
                <>
                    <img src={imgUrl} className="mb-3" style={{ width: "300px" }} alt={item.name} />
                    <h2>{item.name}</h2>
                    <pre>{JSON.stringify(item, null, 2)}</pre>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Detail;