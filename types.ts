// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number(int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: number[]
items = [1, 2, 3]

let total2: Array<number>
total2 = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, "foo", "stephen"]

// enum
enum Colors{
    white = '#FFF',
    black = '#000'
}

// any (Qualquer coisa) Não é legal.
let coisa: any // or let coisa
coisa = [1, 2]

//void (Vazio)
function logger(): void{
    console.log("foo");
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error");
}

// object 
let cart: object
cart = {
    key: "bar"
}

// Type Inference 
let message2 = "Mensagem definida"  

window.addEventListener("click", (e) => {
    console.log(e.target)
})