import { createReducer, on } from '@ngrx/store';
import { reset } from './contador.actions';
import {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
} from './contador.actions';

export const initialState = 10;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => initialState)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
// export function contadorReducer(state: number = 10, action: Action): number {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }
