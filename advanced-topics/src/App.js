import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './component/counterF'
import Users from './component/Users';

function App() {
  return (
    <div className="App">
     {/* <Movie id={1}/>
     <Counter /> */}
     <Users />
    </div>
  );
}

export default App;
