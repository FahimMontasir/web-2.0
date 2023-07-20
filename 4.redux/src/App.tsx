import { Button } from "./components/ui/button";

import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-50 h-screen flex flex-col justify-center items-center">
      <h1>{count}</h1>
      <Button
        variant="secondary"
        className="text-2xl"
        onClick={() => dispatch(increment())}
      >
        increment
      </Button>
      <Button
        variant="secondary"
        className="text-2xl"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button
        variant="secondary"
        className="text-2xl"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by amount
      </Button>
    </div>
  );
}

export default App;
