import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default function Home({ pokemonProp: results }) {
    console.log(results);
    return (
        <div>
            <div className="cards">
                {results &&
                    results.map((val) => (
                    <div className="card container" key={val.index}>
                        
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.index}.png`} alt=""  className=" pfp row"/>

                        <Link to={`/about/${val.index}`} className="name">{val.name}</Link>
                    </div>
                ))}
    </div>
        </div>
       
    );
}