import React from "react";
import {useState, useEffect} from "react";

import "./Pokedex.css";
import HomeButton from "../../components/HomeButton.js";
import Card from "./Card.js";

function Pokedex() {
    // let cards = [];
    const [pokeCards, setPokeCards] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            for(let i = 1; i < pokemon_count; i++) {
                await getPokemon(i)
            }
        }
        
        const getPokemon = async (id) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch(url);
            const data = await res.json();
        
            //console.log(data);
            // let cards = [];
            setPokeCards(currentList => [...currentList, data])
        }

        fetchPokemons()
    }, [])

    const pokemon_count = 150;
    const colors = {
        fire: "#fddfdf",
        grass: "#defde0",
        electric: "#fcf7de",
        water: "#def3fd",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#f5f5f5",
        fighting: "#e6e0da",
        normal: "#f5f5f5"
    }
    const main_types = Object.keys(colors);

    //console.log("this is pokeCards: ", pokeCards)

    return (
        <div className="poke-big-container">
            <h1 className="poke-h1">Pokedex</h1>
            <div className="poke-poke-container" id="poke-container">
        
            { 
                pokeCards ?
                pokeCards.map((pokemon, index) => {
                    return <Card key={index} pokemon={pokemon} main_types={main_types} colors={colors}/>
                })
                : null
            }

            </div>

            <HomeButton />
        </div>
    )
}

export default Pokedex;