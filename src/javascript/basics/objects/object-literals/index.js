
export const FACTIONS = {
    Autobots: 'autobots',
    Decepticons: 'decepticons'
};

export const OptimusPrime = {
    name: 'Optimus Prime',
    faction: FACTIONS.Autobots,
    power: 1000,
    greet(){
        return ('Hello I am '+ this.name)
    }
};

export const Megatron = {
    name: 'Megatron',
    faction: FACTIONS.Decepticons,
    power: 1000,
    greet(){
        return ('Hello I am '+ this.name)
    }
};


