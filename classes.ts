abstract class UserAcount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAcount {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("------GET------")
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    charDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`)
    }
}

// const stephen = new UserAcount("Stephen", 21)
// console.log(stephen);
// stephen.logDetails();

const stephen2 = new CharAccount("Stephen", 21, "Klebão", 666)
stephen2.setLevel = 901;
console.log(stephen2);
stephen2.logDetails();
stephen2.charDetails();
console.log(stephen2.getLevel);