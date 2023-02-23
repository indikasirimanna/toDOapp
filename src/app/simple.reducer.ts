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