import React from "react";

import "./Pokedex.css";

function Card({pokemon, main_types, colors}) {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");
    const poke_types = pokemon.types.map(type => type.type.name); 
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    const IMG_PATH = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`

    return (
        <div className="poke-pokemon" style={{backgroundColor: color}}>
            <div className="poke-img-container">
                <img className="poke-img" src={IMG_PATH + pokemon.id + ".png"} alt={name} />
            </div>

            <div className="poke-info">
                <span className="poke-number">{id}</span>
                <h3 className="poke-name">{name}</h3>
                <small className="poke-type">Type: <span>{type}</span></small>
            </div>
        </div>
    )
}

export default Card;