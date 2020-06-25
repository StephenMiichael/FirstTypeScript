// @Component
// @Selector
// @useState("dasdas")

// Factory
// function Logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`);
//     };
// }

// @Logger("Awesome")
// class Foo { }

// Class decorator
// function setAPIVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }

// // Decorator - Anotar a versão da API.
// @setAPIVersion("1.0.0")
// class API {}

// console.log(new API())

// Porperty decorator

// function minLength(length: number){
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val;

//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Erro - Você não pode criar ${key} menor do que ${length}.`)
//             } else{
//                 val = value
//             }
//         };
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         });
//     };
// }

// class Movie {
//     //Validação - Se for menor que 5. Aviso que não pode. - Error
//     @minLength(5)
//     title: string;

//     constructor(t: string){
//         this.title = t;
//     }
// }

// const movie = new Movie("Interstellar");
// console.log(movie.title);

// Method decorator

function delay(ms: number){
    return(target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        }; 
    }
}

class Greeter {
    greeting: string;

    constructor(g:string) {
        this.greeting = g
    }

    // Esperar um tempo eaí vai chamar o método (ms)
    @delay(5000)
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}

    const pessoinha = new Greeter("Pessoinha!");
    pessoinha.greet();

// Parameter decorator
// Acessor decorator
