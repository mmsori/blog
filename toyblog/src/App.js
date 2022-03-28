import logo from './logo.svg';
import MainPage from './containers/todolist'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage title={'심심한 랭킨을 살려주세요'} />
    </div>
  );
}

export default App;
