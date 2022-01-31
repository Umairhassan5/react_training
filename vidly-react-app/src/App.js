
import Movies from './components/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Navbar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';

function App() {
  return (

    <div className="App">
      <Navbar />
      <main className='container'>
        <Switch>
        <Route path='/login' component={LoginForm}></Route>
        <Route path={'/movies/:id'} component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from='/' exact to='/movies' />
        <Redirect  to='/not-found' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
