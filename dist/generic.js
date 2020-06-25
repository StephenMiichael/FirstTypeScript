"use strict";
//S => State
//T => Type
//K => Key
//V => Value
//E => Element
// = string será o Default.
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//Como declarei o Default como String, não preciso declarar <String> antes do ().
var newState = useState();
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123)// Erro pois declarei o useState como String.
// console.log(newState.getState());
