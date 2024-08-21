
import './App.css';
import Navbar  from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '5em 1fr',
      gridColumnGap: '1em',
      gridRowGap: '1em',
    }}>
      <Navbar   />
      <Outlet />
    </div>
  );

}

export default App;
