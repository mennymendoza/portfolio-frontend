import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';
import { RootState } from '../store';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(4))}>Add 4</button>
            </div>
        </div>
    );
}
