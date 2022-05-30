import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store'

import { environment } from 'src/environments/environment'
import { countReducer, CountState } from './count/count.reducer';
import { countNode } from './count/count.reducer';

export interface State {
    [countNode]: CountState
}

export const reducers: ActionReducerMap<State> = {
    [countNode]: countReducer

}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];