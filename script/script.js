import {getPokemon} from "./getPokemon.js"
import {getStats} from "./getStats.js"
let url = 'https://pokeapi.co/api/v2/pokemon'
const idx = document.querySelector("#idx")
const thumbBar = document.querySelector("#thumbBar");
const displayedImg = document.querySelector("#displayedImg");
const name = document.querySelector("#namePokemon");
const type = document.querySelector("#type")

const hp = document.querySelector("#hp")
const attack = document.querySelector("#attack")
const defense = document.querySelector("#defense")
const speed = document.querySelector("#speed")
const total = document.querySelector("#total")

const mov1 = document.querySelector("#mov1")
const mov2 = document.querySelector("#mov2")
const mov3 = document.querySelector("#mov3")
const mov4 = document.querySelector("#mov4")

let pokeNames = []
let pokeTypes = []
let pokeHps = []
let pokeAttacks = []
let pokeDefenses = []
let pokeSpeeds= []
let pokeMoves1 = []
let pokeMoves2 = []
let pokeMoves3 = []
let pokeMoves4 = []
async function imgIteration(){
    const data  = await getPokemon(url)
    
    
    for(let x=1; x<15; x++){
        pokeNames.push(data.results[x-1].name)
        const stats = await getStats(url, x)
        pokeTypes.push(stats.types[0].type.name);
        pokeHps.push(stats.stats[0].base_stat)
        pokeAttacks.push(stats.stats[1].base_stat)
        pokeDefenses.push(stats.stats[2].base_stat)
        pokeSpeeds.push(stats.stats[5].base_stat)

        pokeMoves1.push(stats.moves[0].move.name)
        pokeMoves2.push(stats.moves[1].move.name)
        pokeMoves3.push(stats.moves[2].move.name)
        pokeMoves4.push(stats.moves[3].move.name)

        // console.log(pokeNames)
        // console.log(stats)
        // console.log(pokeTypes)
        // console.log(pokeHps)
        // console.log(pokeAttacks)
        // console.log(pokeDefenses)
        // console.log(pokeSpeeds)
        //console.log(pokeMoves1)


        const slideBar = document.createElement("img");
        thumbBar.append(slideBar);
        slideBar.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${x}.svg`);
        slideBar.addEventListener("click",()=>{
            idx.textContent = x
            displayedImg.setAttribute("src", slideBar.src);
            name.textContent = pokeNames[x-1];
            type.textContent = pokeTypes[x-1];

            hp.textContent = pokeHps[x-1]
            attack.textContent = pokeAttacks[x-1]
            defense.textContent = pokeDefenses[x-1]
            speed.textContent = pokeSpeeds[x-1]
            total.textContent = pokeHps[x-1]+pokeAttacks[x-1]+pokeDefenses[x-1]+pokeDefenses[x-1]+pokeSpeeds[x-1]

            mov1.textContent = pokeMoves1[x-1]
            mov2.textContent = pokeMoves2[x-1]
            mov3.textContent = pokeMoves3[x-1]
            mov4.textContent = pokeMoves4[x-1]
        })
    }
}

imgIteration();

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'),{
        slidesToShow: 1,
		slidesToScroll: 12,
        draggable: false,
		dots: '.carousel__indicators',
		arrows: {
			prev: '.carousel__back',
			next: '.carousel__next'
		}
    })
})