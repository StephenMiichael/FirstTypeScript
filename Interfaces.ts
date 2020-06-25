interface Game{
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    title: "God Of War",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS4", "PS5"],
    getSimilars: (title: string) => {
        console.log(`The best game in the world is ${title}.`);
    }
}

console.log("Genre: " + tlou.genre + '\n')
if(tlou.getSimilars){
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game{
    originalGame: Game;
    newContent: string[];
}

const Odin: DLC = {
    title: "God Of War - Odin",
    description: "Game to kill odin",
    genre: "Action",
    platform: ["PS4", "PS5"],
    originalGame: tlou,
    newContent: ["3 Hours of story", "Odin boss"]
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g:string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}