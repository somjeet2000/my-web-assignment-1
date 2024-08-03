import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Header />
      <div
        className='main-content'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <div className='col-1' id='sidebar-wrapper'>
          <Sidebar />
        </div>
        <div className='col-11' id='page-content-wrapper'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
