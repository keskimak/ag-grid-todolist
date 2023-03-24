import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do -list</h1>
      </header>
      <p>
        <TodoList />
      </p>
    </div>
  );
}

export default App;
