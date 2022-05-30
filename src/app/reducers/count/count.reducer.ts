import { countActionsType } from './count.actions';

export const countNode = 'count';

export interface CountState {
  count: number;
  updateAt: number;
}

const initialState = {
  count: 0,
  updateAt: Date.now(),
};

export const countReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1,
      };
    case countActionsType.decrease:
      return {
        ...state,
        count: state.count - 1,
      };
    case countActionsType.clear:
      return {
        ...state,
        count: 0,
      };
    case countActionsType.updateAt:
      return {
        ...state,
        updateAt: action.payload.updateAt,
      };
    default:
      return state;
  }
};
