import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CountClearAction,
  CountDecreaseAction,
  CountIncreaseAction,
} from './reducers/count/count.actions';
import { CountState } from './reducers/count/count.reducer';
import { selectCount, selectUpdateAt } from './reducers/count/count.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(
    select(selectUpdateAt)
  );
  public disableDecrease$: Observable<boolean> = this.count$.pipe(
    map((count) => count <= 0)
  );

  constructor(private store$: Store<CountState>) {}
  increase = () => {
    this.store$.dispatch(new CountIncreaseAction());
  };

  decrease = () => {
    this.store$.dispatch(new CountDecreaseAction());
  };

  clear = () => {
    this.store$.dispatch(new CountClearAction());
  };
}
