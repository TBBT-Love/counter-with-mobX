import { useState } from 'react';
import { observer } from 'mobx-react-lite';

export const CounterButton = observer(({ counter }) => {
  const [incrementBy, SetIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {counter.numberOfClicks} times.</p>
      <label>
        {' '}
        Set Increment By:
        <input
          value={incrementBy}
          onChange={e => SetIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => counter.increment(incrementBy)}>
        Click
      </button>
    </>
  );
});
