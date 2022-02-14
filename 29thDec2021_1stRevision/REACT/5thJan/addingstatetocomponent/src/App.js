import logo from './logo.svg';
import './App.css';
import Addstate from './components/addstate';
import Appfooter from './components/AppFooter';
import Appheader from './components/AppHeader';
import Appbody from './components/AppBody';

function App() {
  return (
    <div className="App">
      <Addstate name="Shivam"/>
      <Appheader />
      <Appbody/>
      <Appfooter properties="Poonam Chauhan"/>
    </div>
  );
}

export default App;
