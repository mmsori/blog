import logo from './logo.svg';
import MainPage from './containers/todolist'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainPage title={'심심심심'} />
    </div>
  );
}

export default App;
