type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Readonly<Todo> = {
    title: "Assistir Dark",
    description: "Prestar atenção nos detalhes",
    completed: false, 
}

console.log(todo);

// todo.completed = true; 

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {... todo, ...fieldsToUpdate}
}

//Para dar alterar um const Readonly
const todo2: Todo = updateTodo(todo, {completed: true})     
console.log(todo2);


//Pick para "Pegar" apeans alguns.
type TodoPreview = Pick<Todo, "title" | "completed" >

const todo3: TodoPreview = {
    title: "Fechar ghost of Tsushima",
    completed: true,
}

//Omit Para "Omitir" Alguns.
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar ghost of Tsushima",
    completed: false,
}