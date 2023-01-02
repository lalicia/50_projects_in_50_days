//to make the squares
const SQUARES = 500;
export let theSquares = [];

for(let i = 0; i < SQUARES; i++) {
    theSquares.push({
        id: i,
        className: "hboard-square",
    })
    console.log("squares created")
}