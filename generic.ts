//S => State
//T => Type
//K => Key
//V => Value
//E => Element

// = string será o Default.
function useState<S extends number | string = string>() {
    let state: S

    function getState(){
        return state;
    }

    function setState(newState: S){
        state = newState;
    }

    return {getState, setState};
}

//Como declarei o Default como String, não preciso declarar <String> antes do ().
const newState = useState();

newState.setState("foo") 
console.log(newState.getState());

// newState.setState(123)// Erro pois declarei o useState como String.
// console.log(newState.getState());