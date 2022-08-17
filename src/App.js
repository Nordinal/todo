import TodoList from './components/TodoList';
import TodoSettings from './components/TodoSettings';
import './style/App.css';

function App() {
  return (
    <div className="App">
      {/* Список и Редактирование списка соответсвенно */}
        <TodoList/> 
        <TodoSettings/>
    </div>
  );
}

export default App;
