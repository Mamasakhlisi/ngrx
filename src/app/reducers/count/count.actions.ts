import { Action } from '@ngrx/store';

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updateAt = '[COUNT] update at',
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export class CountUpdateAtAction implements Action {
  readonly type = countActionsType.updateAt;
  constructor(
    public payload: {
      updateAt: number;
    }
  ) {}
}

export type CountActions =
  | CountIncreaseAction
  | CountDecreaseAction
  | CountClearAction
  | CountUpdateAtAction;
