const optimusPrime = {
    name: "Optimus Prime",
    faction: "Autobots",
    power: 10000,
    greet(){
        return ("Hello I am "+ name)
    }
}

const megatron = {
    name: "Megatron",
    faction: "Decepticon",
    power: 10000,
    greet(){
        return ("Hello I am "+ name)
    }
}

export const FACTIONS = {
    Autobots: "Autobots",
    Decepticon: "Decepticon"
}
console.log(optimusPrime);
console.log(megatron);
console.log(FACTIONS);