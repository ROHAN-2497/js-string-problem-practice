// const lyrics = "tumi bondhu kala pakhi ami jeno ki boshonto kale tomai bhulte pari ni kala kala sada sada"
// const doesExits = lyrics.includes("pokhi")
// console.log(doesExits);

// console.log(lyrics.indexOf("ala"));

const color = "blue , white, red, black"
const available = color.includes('red');
// console.log(color.indexOf('red'))
console.log(available, color.indexOf('black'))

if (color.indexOf('white') !== -1){
    console.log("its does exits")
}
else {
    console.log('cant find this')
}
console.log(color.startsWith('blue'));
console.log(color.endsWith('blacks'))


