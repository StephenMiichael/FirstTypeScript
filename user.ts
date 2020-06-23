// Account info
// Char Info
// Player Info

type Accountinfo = {
    id: number | string;
    name: string;
    email?: string;
}

const account: Accountinfo = {
    id: 1721,
    name: "Stephen", 
    // email: "stephenmiichael@outlook.com"
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "Ridlav",
    level: 666
}

// Intersection
type PlayerInfo = Accountinfo & CharInfo

const Player: PlayerInfo = {
    id: `1721`,
    name: "Stephen",
    email: "stephenmiichael@outlook.com",
    nickname: "Ridlav",
    level: 666  
}