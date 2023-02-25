/* This code exports a function named simpleReducer which is a reducer function used by the @ngrx/store library to manage application state.
The reducer takes in two parameters: state and action. The state parameter is initialized to the string value of (ngrx)Click to Change => and represents the current state of the application. The action parameter is an object that describes the changes to be made to the state.
Inside the reducer, a switch statement is used to handle different types of actions. If the action type is SINHALA, the reducer returns a new state of 'Change language to Sinhala'. If the action type is FRENCH, the reducer returns a new state of 'Sample test'. If the action type is not recognized, the reducer returns the current state.
The reducer function logs the action type and the current state to the console. This can be useful for debugging purposes.
 25/02/2023 Indika Sirimanna*/
import {Action} from '@ngrx/store';

export function simpleReducer(state : string = '(ngrx)Click to Change =>', action : Action){
console.log(action.type, state);
switch (action.type){
    case 'SINHALA':
        return state = 'Change language to Sinhala'

    case 'FRENCH': 
        return state = 'Sample test'

        default:
            return state;
}
}