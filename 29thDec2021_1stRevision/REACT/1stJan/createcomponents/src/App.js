import logo from './logo.svg';
import './App.css';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
    <AppBody/>
    <AppHeader/>
    <AppFooter/>
    </div>
  );
}

export default App;
