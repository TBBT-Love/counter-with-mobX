import { CounterButton } from './CounterButton';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Counter } from './Counter';

const counter = new Counter();
const App = () => {
  return (
    <Provider store={store}>
      <h1>State Management Example with MObX</h1>
      <CounterButton counter={counter} />
    </Provider>
  );
};

export default App;
