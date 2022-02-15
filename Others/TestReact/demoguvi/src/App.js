import logo from './logo.svg';
import './App.css';
import AppBody from './components/AppBody/AppBody';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import SetState from './components/SetState/setState';

function App() {
  return (
    <div className="App">
      <h1>Hi, we are learning React and component</h1>
      <AppBody name="Stateless"/>
      <AppHeader/>
      <AppFooter/>
      <SetState/>
    </div>
  );
}

export default App;
